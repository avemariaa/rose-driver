import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Home from "./Home";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const navigate = useNavigate();

  const errors = {
    username: "Invalid username",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password"
  };
  const Home = () => {
    // 👇️ navigate to /
    navigate("/Home");
  };
  const handleSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();

    // User Login info
    const currentUser = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];

    const errors = {
      username: "invalid username",
      password: "invalid password"
    };
    if (currentUser) {
      if (currentUser.password !== password) {
        // Wrong password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        // Correct password, log in user
        setErrorMessages({});
        setIsLoggedIn(true);
      }
    } else {
      // Username doens't exist in the database
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <div className="login">
      <h1 className="title">Rose Rider</h1>

      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link to={"/History"} className="login_button">
          {" "}
          Sign In
        </Link>
        <button onClick={Home}>Home</button>
      </form>
      <div className="link_container">
        <a href="" className="small">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default Login;
