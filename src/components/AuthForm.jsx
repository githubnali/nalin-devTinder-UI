// src/pages/Auth.tsx
import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

export default function AuthForm() {
  //get the search params from the URL
  const [searchParams, setSearchParams] = useSearchParams();

  // read mode from query string (?mode=login or ?mode=signup)
  const mode = searchParams.get("mode") || "signup";

  //toggle between login and signup
  const toggleMode = () => {
    if (mode === "signup") {
      setSearchParams({ mode: "login" });
    } else {
      setSearchParams({ mode: "signup" });
    }
  };

  //state management for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
    <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          {mode === "signup" ? "👤 Create Your Account" : "👋 Welcome Back"}
        </h2>

        <form 
          className="space-y-4"
           onSubmit={(e) => {
            e.preventDefault(); // prevent page reload
            mode === "signup" ? handleSignup() : handleLogin();
          }}>
          {mode === "signup" && (
            <>
              <div className="form-control">
                <label className="label font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Nagaraju"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Nali"
                  className="input input-bordered w-full"
                />
              </div>
            </>
          )}

          <div className="form-control">
            <label className="label font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="nagaraju@example.com"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4 text-white"
          >
            {mode === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-neutral-600">
          {mode === "signup" ? (
            <>
              Already have an account?{" "}
              <button
                onClick={toggleMode}
                className="text-primary font-semibold hover:underline"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                onClick={toggleMode}
                className="text-primary font-semibold hover:underline"
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
