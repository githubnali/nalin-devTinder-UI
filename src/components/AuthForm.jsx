// src/pages/Auth.tsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthForm() {

  //state management for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isSignUp, setIsSignUp] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate()

  //handle signup
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
  }

  //handle login
  const handleLogin = async() => {
      try {

          const res = await axios.post(BASE_URL + "/login", {
              emailId,
              password
          }, {
              withCredentials: true
          });
          dispatch(addUser(res.data));
          navigate("/feed")
      } catch(err) {
          setError(err?.response?.data || "Something Went Wrong!!!")
      }
  }

  return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-100 to-indigo-300">
        <div
          className={`relative w-[650px] h-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ease-in-out mx-4 ${
            isSignUp ? "translate-x-0" : ""
          }`}
        >
          {/* Left / Right Container */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center items-center px-5 transition-all duration-700 ease-in-out ${
              isSignUp ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {/* Sign In Section */}
            <h2 className="text-xl md:text-3xl font-bold mb-10 text-primary">Sign In</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}

            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" className="text-sm text-primary mb-4 hover:underline font-semibold">
              Forgot your password?
            </a>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition font-semibold" onClick={handleLogin}>
              Sign In
            </button>
          </div>

          {/* Right Info Panel (for Sign In) */}
          <div
            className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white flex flex-col justify-center items-center px-5 transition-all duration-700 ease-in-out rounded-tl-[80px] rounded-bl-[80px] ${
              isSignUp ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            <h2 className="text-xl md:text-3xl font-bold mb-5">Hello, Developer!</h2>
            <p className="text-center mb-6">
              Register with your personal details to use all of the site's features.
            </p>
            <Link to="/auth?mode=signup">
              <button
                onClick={() => setIsSignUp(true)}
                className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-indigo-600 transition font-semibold"
              >
                Sign Up
              </button>
            </Link>
          </div>

          {/* Sign Up Section */}
          <div
            className={`absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center items-center px-5 transition-all duration-700 ease-in-out ${
              isSignUp ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <h2 className="text-xl md:text-3xl font-bold mb-6 text-primary">Create Account</h2>
            <input
              type="text"
              placeholder="First Name"
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
               value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-700 transition" onClick={handleSignup}>
              Sign Up
            </button>
          </div>

          {/* Left Info Panel (for Sign Up) */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white flex flex-col justify-center items-center px-5 transition-all duration-700 ease-in-out rounded-tr-[80px] rounded-br-[80px] ${
              isSignUp ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            <h2 className="text-xl md:text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-center mb-6">
              Enter your personal details to use all of the site's features.
            </p>
            <Link to="/auth?mode=login">
              <button
                onClick={() => setIsSignUp(false)}
                className="border border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-indigo-600 transition"
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
}
