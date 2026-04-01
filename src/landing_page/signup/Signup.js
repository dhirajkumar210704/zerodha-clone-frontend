/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import { toast } from "react-toastify";

function Signup() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/signup", inputValue);

      if (data.success) {
        toast.success(data.message);
        setTimeout(() => {
          window.location.href =
            "https://zerodha-clone-dashboard-bv5d.vercel.app/";
        }, 1000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Signup failed");
      console.error(error);
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-4">
        <div className="card shadow-sm p-4">
          <h3 className="text-center mb-4">Create your Zerodha account</h3>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                placeholder="name@example.com"
                onChange={handleOnChange}
                required
              />
            </div>

            {/* Username */}
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                className="form-control"
                placeholder="Choose a username"
                onChange={handleOnChange}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="Create a password"
                onChange={handleOnChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Create Account
            </button>

            <div className="text-center mt-3">
              <small>
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
