import React, { useState } from 'react'

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
    const [emailId, setEmailId] = useState("nagarajunnr341@gmail.com");
    const [password, setPassword] = useState("Nagaraju@212");

    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handleLogin = async() => {
        try {

            const res = await axios.post(BASE_URL + "/login", {
                emailId,
                password
            }, {
                withCredentials: true
            });

            console.log(res)
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
            <h2 className="card-title justify-center">Login Form</h2>
            <div>
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
            <div className="card-actions justify-center mt-5">
                <button className="btn bg-primary border-0 text-white shadow-none" onClick={handleLogin}>Login</button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Login