import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { removeUser } from '../utils/userSlice';

const NavBar = () => {

    const user = useSelector((store) => store.user);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogout = async() => {
      try {
        await axios.post(BASE_URL + "/logout", {}, {withCredentials: true});
        dispatch(removeUser());
        return navigate("/login")
      }catch(err) {
        console.error(err)
      }
    }
  return (
     <header className="navbar bg-neutral shadow-sm">
      <div className="flex-1">
        <Link to="/" className='flex items-center gap-4'>
          <div className="avatar">
            <div className="w-10">
              <img src="./favicon.svg" />
            </div>
          </div>        
          <p className="text-xl font-semibold">DevTinder</p>
        </Link>
      </div>
      {user &&  <div className="flex items-center font-bold">
        <div>Welcome, {user.firstName}</div>
        <div className="dropdown dropdown-end mx-5 bg-neutral">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt={`profile photo of ${user}`}
                src={user.photoUrl} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-neutral rounded-box z-1 mt-4 w-52 p-2 shadow">
            <li>
              <Link to='/profile' className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/connections">Connections</Link>
            </li>
             <li>
              <Link to="/requests">Requests</Link>
            </li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
      </div>}
     
    </header>  
  )
}

export default NavBar