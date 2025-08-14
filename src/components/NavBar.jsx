import React from 'react'
import { useSelector } from 'react-redux'

const NavBar = () => {

    const user = useSelector((store) => store.user);

    console.log(user)
  return (
     <header className="navbar bg-neutral shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DevTinder</a>
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
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>}
     
    </header>  
  )
}

export default NavBar