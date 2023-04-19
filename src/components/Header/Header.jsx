import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthContext/AuthPRovider';

const Header = () => {

    const {user,logOut} = useContext(authContext)

    const handleLogout =()=>{

        logOut()
        .then(result=>{
            console.log(result)
        }).catch(error=>console.log(error))

    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/sign-up">SignUp</Link>
                { user&& <span className='userInfo'>{user.email}  <button onClick={handleLogout}>Log out</button></span>}

            </div>
        </nav>
    );
};

export default Header;