import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/images/assets";
import { login, signup, resetPass } from "../../config/firebase";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currState === "Sign Up") {
      signup(userName, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <>
    
      <Navbar/>
    <div className="login">
      <img src={assets.logo_big} alt="logo" className="logo" />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign Up" ? (
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            className="form-input"
            required
          />
        ) : null}
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="form-input"
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="form-input"
          required
        />

        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login Now"}
        </button>
        {currState === "Sign Up" ? (
          <div className="login-term">
            <input type="checkbox" required />
            <p>Agree to the terms of use & privacy policy</p>
          </div>
        ) : <div className="login-term login-term-hidden">
        <input type="checkbox" />
        <p>Agree to the terms of use & privacy policy</p>
      </div>}
        <div className="login-forgot">
          {currState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here.</span>
            </p>
          )}
          {currState === "Login" ? (
            <p className="login-toggle">
              Forgot Password?{" "}
              <span onClick={() => resetPass(email)}>Reset here.</span>
            </p>
          ) : null}
        </div>
      </form>
    </div>
  </>
  );
};

export default Login;