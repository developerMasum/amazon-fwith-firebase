import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthContext/AuthPRovider';

const Login = () => {
  const {login} = useContext(authContext)
  const [error,setError] = useState('');
  const navigate = useNavigate()
const location = useLocation()
console.log(location);
  

const handleLogIn =(event)=>{
  event.preventDefault()
  const form = event.target;
  const email = form.email.value;
  const password =  form.password.value;
 
  console.log(email,password);

  if (password < 6) {
    setError('password should be 6 character')
    
  }

  login(email,password)
  .then(result=>{
    const loggedUSer = result.user;
    console.log(loggedUSer);
    form.reset();
    navigate('/')
  })
  .catch(error=>{
    console.log(error);
    setError(error.message)
  })

}

    return (
        <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogIn}>
          <label className='labelCss' htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
  
          <label className='labelCss' htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
  
          <button type="submit">Login</button>
        </form>
  
        <div className="google-login">
          <button className="continue-with-google">Continue with Google</button>
        </div>
        <p><small>New User ? click here to <Link to="/sign-up">Sign up</Link> </small></p>
        <p className="error"><small>{error}</small></p>
      </div>
    );
};

export default Login;