import React, { useEffect } from 'react'
import axios from 'axios'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((store) => store.user)
  
  const fetchUser = async() => {
    if(userData) return;
    try {
      const resp = await axios.get(BASE_URL + '/profile/view', {withCredentials: true})
      dispatch(addUser(resp.data))
    }catch(err) {
      if(err.status === 401) {
        navigate("/login")
      }
      // console.error(err)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <>
        <NavBar/>
        <main>
            <Outlet />
        </main>
        <Footer/>
    </>
  )
}

export default Body