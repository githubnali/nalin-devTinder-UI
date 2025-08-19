import React, { useState } from 'react'

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [isLogin, setIsLogin] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handleSignup = async() => {
        try {
            const res = await axios.post(BASE_URL + "/signup", {
                firstName,
                lastName,
                emailId,
                password
            }, {
                withCredentials: true
            });
            dispatch(addUser(res.data));
            navigate("/profile")
        } catch(err) {
            setError(err?.response?.data || "Something Went Wrong!!!")
        }
        setFirstName("");
        setLastName("");
        setEmailId("");
        setPassword("");
        setError("");
    }
    const handleLogin = async() => {
        try {

            const res = await axios.post(BASE_URL + "/login", {
                emailId,
                password
            }, {
                withCredentials: true
            });
            dispatch(addUser(res.data));
            navigate("/")
        } catch(err) {
            setError(err?.response?.data || "Something Went Wrong!!!")
        }
    }
  return (
    <section className='flex justify-center'>
        <div className="card bg-neutral text-primary-content w-96 my-5">
        <div className="card-body">
            <h2 className="card-title justify-center">{isLogin ? "Login Form": "Sign Up Form"}</h2>
            <div>
                {!isLogin && 
                    <>
                        <fieldset className="fieldset mb-3">
                            <legend className="fieldset-legend text-white">First Name</legend>
                            <input 
                                type="text" 
                                className="input text-neutral"
                                value= {firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </fieldset>

                        <fieldset className="fieldset mb-3">
                            <legend className="fieldset-legend text-white">Last Name</legend>
                            <input 
                                type="text" 
                                className="input text-neutral"
                                value = {lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </fieldset>
                    </>  
                } 
               
               <fieldset className="fieldset mb-3">
                    <legend className="fieldset-legend text-white">Email ID</legend>
                    <input 
                        type="text" 
                        className="input text-neutral"
                        value= {emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                    />
                </fieldset>

                <fieldset className="fieldset mb-3">
                    <legend className="fieldset-legend text-white">Password</legend>
                    <input 
                        type="text" 
                        className="input text-neutral"
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>
            </div>
            <p className='text-red-500'>{error}</p>
            <div className="card-actions justify-center">
                <button className="btn bg-primary border-0 text-white shadow-none mb-3" onClick={isLogin ? handleLogin : handleSignup}>{isLogin ? "Login" : "Sign Up"}</button>
            </div>
            <p className='m-auto text-xl font-semibold cursor-pointer' onClick={() => setIsLogin((val) => !val)}>{isLogin ? "New User? Signup Here" : "Existing User? LoginHere"}</p>
        </div>
        </div>
    </section>
  )
}

export default Login