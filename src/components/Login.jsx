import React, { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("https://server-orpin-delta.vercel.app/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Please Log In</h1>

      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            <h5>Username</h5>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              className="input"
            />
          </label>
          <label>
            <h5>Password</h5>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </label>
          <div className="login-btn">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};


