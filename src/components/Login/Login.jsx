import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className="login-container">
        <h1>Login</h1>
        <form>
          <label className='labelCss' htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
  
          <label className='labelCss' htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
  
          <button type="submit">Login</button>
        </form>
  
        <div className="google-login">
          <button className="continue-with-google">Continue with Google</button>
        </div>
      </div>
    );
};

export default Login;