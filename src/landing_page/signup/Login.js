/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import { toast } from "react-toastify";

function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

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
      const { data } = await api.post("/login", inputValue);

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
      toast.error("Invalid credentials");
      console.error(error);
    }

    setInputValue({
      email: "",
      password: "",
    });
  };
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-4">
        <div className="card shadow-sm p-4">
          <h3 className="text-center mb-4">Login to Zerodha</h3>

          <form onSubmit={handleSubmit}>
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

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="Enter password"
                onChange={handleOnChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Login
            </button>

            <div className="text-center mt-3">
              <small>
                New to Zerodha? <Link to="/signup">Create account</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
