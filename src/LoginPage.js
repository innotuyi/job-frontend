import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import config from './config'
const APP_URL = config.apiUrl


const LoginPage = () => {

  const [email, setEmail] = useState({});

  const [pass, setPassword] = useState({});


  const navigate = useNavigate();

  const onEmailChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setEmail({ value: em });
    } else {
      setEmail({ value: em, message: "Write your Email" });
    }
  };

  const onPasswordChange = (e) => {
    var password = e.target.value;
    if (password !== "") {
      setPassword({ value: password });
    } else {
      setPassword({ value: password, message: "Enter your Password" });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.value == null || email.value == "") {
      setEmail({ message: "Write your email" });
    } else if (pass.value == null || pass.value == "") {
      setPassword({ message: "Enter your password" });
    } else {
      const payload = {
        email: email.value,
        password: pass.value,
      };
      try {
        const response = await axios.post(
          `${APP_URL}/api/login`,
          payload
        );
        console.log("login response", response.data)
        localStorage.setItem("token", response.data);
        navigate("/dashboard");
      } catch (error) {
        navigate("/login");
      }
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" onChange={onEmailChange} />
                  <span class="text-danger">{email.message}</span>

                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label" onChange={onPasswordChange}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={onPasswordChange}
                  />
                  <span class="text-danger">{email.message}</span>

                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
