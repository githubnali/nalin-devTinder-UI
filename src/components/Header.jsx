// src/components/NavBar.tsx
import { LogIn, UserPlus, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import {useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import {removeUser } from "../utils/userSlice";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FiMoon, FiSun } from "react-icons/fi";
import { FiUser, FiUsers, FiLogOut, FiHeart } from "react-icons/fi";
import { TbFriends } from "react-icons/tb";


export default function NavBar() {
  const user = useSelector((store) => store.user);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/auth?mode=login");
    } catch (err) {
      console.error(err);
    }
  };

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // set initial theme based on document or fallback
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <header className="bg-base-100 shadow-md w-full z-50 border-b border-base-500">
      <div className="navbar px-6">
        {/* Left: Logo */}
        <div className="flex-1">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl"
          >
            <img src="./favicon.svg" alt="DevCircle" className="w-8 h-8" />
            <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                DevBuddy
            </p>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
   
          {user && (
            <div className="flex items-center font-bold">
              <span className="text-neutral bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">👋 Welcome, {user.firstName}</span>
              <div className="dropdown dropdown-end mx-5">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full border-accent border-2">
                    <img alt="profile photo" src={user.photoUrl} />
                  </div>
                </div>
                    <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 border border-primary/20 rounded-box z-10 mt-4 w-56 p-3 shadow-lg"
                    >
                        <li>
                            <Link
                            to="/profile"
                            className="text-primary dark:text-white hover:bg-primary/10 rounded-lg px-2"
                            >
                            <FiUser size={16} /> Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/feed"
                            className="text-primary dark:text-white hover:bg-primary/10 rounded-lg px-2"
                            >
                            <FiHeart size={16} /> Find Matchings
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/connections"
                            className="text-primary dark:text-white hover:bg-primary/10 rounded-lg px-2"
                            >
                            <TbFriends size={16} /> Connections
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/requests"
                            className="text-primary dark:text-white hover:bg-primary/10 rounded-lg px-2"
                            >
                            <FiUsers size={16}/> Requests
                            </Link>
                        </li>
                        <li>
                          <Link
                            to="/premium"
                            className="text-primary dark:text-white hover:bg-primary/10 rounded-lg px-2"
                          >
                            Premium
                          </Link>
                        </li>
                        <li>
                            <button
                                onClick={toggleTheme}
                                className="flex items-center gap-2 text-primary hover:bg-primary/10 rounded-lg px-2 py-1 transition"
                                >
                                {theme === "dark" ? (
                                    <>
                                    <FiSun className="text-yellow-400" size={16} />
                                    <span>Light Mode</span>
                                    </>
                                ) : (
                                    <>
                                    <FiMoon className="text-primary" size={16} />
                                    <span>Dark Mode</span>
                                    </>
                                )}
                            </button>
                        </li>
                        <li>
                            <button
                            className="text-primary dark:text-white hover:bg-error/10 hover:text-error rounded-lg px-2"
                            onClick={handleLogout}
                            >
                            <FiLogOut size={16} /> Logout
                            </button>
                        </li>
                    </ul>

              </div>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        {user && (
          <button
            className="md:hidden text-neutral"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-base-100 border-t border-base-300 shadow-lg text-primary">
          <nav className="flex flex-col items-start p-4 space-y-3">

            {user && (
              <>
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary flex items-center gap-2 font-medium"
                >
                  <FiUser size={16} /> Profile
                </Link>
                <Link
                  to="/connections"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary"
                >
                  Connections
                </Link>
                <Link
                  to="/requests"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary"
                >
                  Requests
                </Link>
                <Link
                  to="/premium"
                  className="hover:text-primary"
                >
                Premium
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="text-left text-error"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
