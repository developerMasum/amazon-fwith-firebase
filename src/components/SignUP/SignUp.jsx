import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div className="signup-container">
        <h1>Sign up</h1>
        <form>
          <label className="labelCss" htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label className="labelCss" htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />

          <button type="submit">Signup</button>
        </form>

        <div className="google-signup">
          <button className="continue-with-google">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
