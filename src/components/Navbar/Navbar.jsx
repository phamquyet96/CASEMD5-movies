import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.css'
const Navbar = () => {
    return (
        <div className='nav' >
            <div className="logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
            </div>
            <div className='nav-left'>
                <Link to={'/login'}>
                    <button className='login'>Login</button>
                </Link>
                <Link to={'/register'}>
                    <button className='register'>Register</button>
                </Link>
            </div>
        </div>
    )
}


export default Navbar;
