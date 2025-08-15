import React, { useState } from 'react'
import FeedCard from './FeedCard';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const EditProfile = ({user}) => {


const [firstName, setFirstName] = useState(user.firstName);
const [lastName, setLastName] = useState(user.lastName);
const [photoUrl, setPhotoUrl] = useState(user.photoUrl)
const [age, setAge] = useState(user.age);
const [about, setAbout] = useState(user.about);
const [gender, setGender] = useState(user.gender );
const [error, setError] = useState('');

const [toast, setToast] = useState(false);

const dispatch = useDispatch();

const saveProfile = async() => {
    //clear error message
    setError("")
    try{
        const resp = await axios.patch(BASE_URL + "/profile/edit", {
            firstName, 
            lastName, 
            photoUrl, 
            age, 
            about, 
            gender
        }, {
            withCredentials: true
        })
        dispatch(addUser(resp?.data?.data))
        setToast(true);
        setTimeout(() => {
            setToast(false)
        }, 3000)

    }catch(err) {
        setError(err?.response?.data)
    }
}
  return (
    <>
        <div className='flex justify-center my-10 gap-5'>
            <section className='flex justify-center'>
                <div className="card bg-neutral text-primary-content w-96">
                <div className="card-body">
                    <h2 className="card-title justify-center">Edit Profile</h2>
                    <div>
                    <fieldset className="fieldset mb-3">
                            <legend className="fieldset-legend text-white">First Name:</legend>
                            <input 
                                type="text" 
                                className="input text-neutral"
                                value= {firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </fieldset>

                        <fieldset className="fieldset mb-3">
                            <legend className="fieldset-legend text-white">Last Name:</legend>
                            <input 
                                type="text" 
                                className="input text-neutral"
                                value = {lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </fieldset>

                         <fieldset className="fieldset mb-3">
                            <legend className="fieldset-legend text-white">Age:</legend>
                            <input 
                                type="text" 
                                className="input text-neutral"
                                value = {age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </fieldset>

                        <fieldset className="fieldset mb-3">
                            <legend className="fieldset-legend text-white">Gender:</legend>
                            <select 
                                defaultValue="Select Gender" 
                                className="select text-neutral"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)} 
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </fieldset>

                        <fieldset className="fieldset mb-3">
                            <legend className="fieldset-legend text-white">Photo Url:</legend>
                            <textarea className="textarea text-neutral" placeholder="your photo url" onChange={(e) => setPhotoUrl(e.target.value)}>
                                {photoUrl}
                            </textarea>
                        </fieldset>
              
                        <fieldset className="fieldset mb-3">
                            <legend className="fieldset-legend text-white">About:</legend>
                            <textarea className="textarea text-neutral" placeholder="Tell About Yourself" onChange={(e) => setAbout(e.target.value)}>
                                {about}
                            </textarea>
                        </fieldset>
                    </div>
                    <p className='text-red-500'>{error}</p>
                    <div className="card-actions justify-center mt-5">
                        <button className="btn bg-primary border-0 text-white shadow-none" onClick={saveProfile}>Save Profile</button>
                    </div>
                </div>
                </div>
            </section>
            <FeedCard user={{firstName, lastName, photoUrl, age, about, gender}}/>
        </div>
        {toast && <div className="toast toast-top toast-center">
            <div className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className='font-bold text-sm'>{`${user.firstName} your profile Updated Successfully.....`}</span>
            </div>
        </div>}
        
    </>

  )
}

export default EditProfile