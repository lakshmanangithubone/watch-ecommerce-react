import React, { useState } from "react";

const Login = () => {
  const [activeLogin, setActiveLogin] = useState(true);

  const [activeRegister, setActiveRegister] = useState(false);

  const login = () => {
    setActiveLogin(true);
    setActiveRegister(false);
  };

  const register = () => {
    setActiveLogin(false);
    setActiveRegister(true);
  };

  return (
    <div className="login-section" id="login">
      <h1>login section</h1>

      <div className="inner-login">
        <div className="login-header">
          <div
            className={activeLogin ? "header-div change-color" : "header-div"}
            onClick={login}
          >
            <h2>Login</h2>
          </div>

          <div
            className={
              activeRegister ? "header-div change-color" : "header-div"
            }
            onClick={register}
          >
            <h2>Creat Account</h2>
          </div>
        </div>

        <form
          className={
            activeLogin ? "login-form form show-form" : "login-form form"
          }
        >
          <div className="div">
            <label for="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="div">
            <label for="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <a href="" className="forgotten-tag">
            forgotten your password?
          </a>

          <button className="login-btn">Login</button>
        </form>

        <form
          className={
            activeRegister ? "login-form form show-form" : "login-form form"
          }
        >
          <div className="div">
            <label for="firstname">First Name</label>
            <input type="email" id="firstname" required />
          </div>
          <div className="div">
            <label for="lastname">Last Name</label>
            <input type="password" id="lastname" required />
          </div>
          <div className="div">
            <label for="phone"> Phone Number </label>
            <input type="number" id="phone" required />
          </div>
          <div className="div">
            <label for="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="div">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create Password (Min. 8 characters)"
              required
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
            />
          </div>
          <div className="div">
            <label for="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Create Password (Min. 8 characters)"
              required
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
            />
          </div>

          <div className="checkbox-div">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox"> I accept the privacy policy </label>
          </div>

          <button className="register-btn">Register</button>
        </form>
      </div>

      <div className="forgot-password-notif">
        <div className="notif-header">
          <h2>FORGOT YOUR PASSWORD?</h2>
          <div className="close-notif">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        <p>
          Provide your account Email address,We will send you an email with the
          reset password link.
        </p>
        <p>Email</p>
        <input type="email" placeholder="Your email here" />

        <button className="email-btn">send</button>
      </div>
    </div>
  );
};

export default Login;
