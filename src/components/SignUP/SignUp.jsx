import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { authContext } from "../AuthContext/AuthPRovider";

const SignUp = () => {
  const [error,setError] = useState('');
  const {createUser} = useContext(authContext);
  
  const handleSignUp =(event)=>{
    setError('')
    event.preventDefault()
const form = event.target;
const email = form.email.value;
const password =  form.password.value;
const conformPass = form.confirm.value;
console.log(email,password,conformPass);




if (password !== conformPass) {
  setError('password not matched')
  return
  
}
else if (password < 6 ) {
  setError('maximum length should be 6 characters..! ')
  return 
}


createUser(email,password)
.then(result=>{
  const loggedUSer = result.user;
  console.log(loggedUSer);
})
.catch(error=>{
  console.log(error);
  setError(error.message)
})



  }









  return (
    <div>
      <div className="signup-container">
        <h1>Sign up</h1>
        <form onSubmit={handleSignUp}>
          <label className="labelCss" htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label className="labelCss" htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm"
            required
          />

          <button type="submit">Signup</button>
        </form>

        <div className="google-signup">
          <button className="continue-with-google">Continue with Google</button>
        </div>
        <p><small>Already have an Account ? click here to <Link to="/login">login</Link> </small></p>

        <p className="error"><small>{error}</small></p>
      </div>
    </div>
  );
};

export default SignUp;
