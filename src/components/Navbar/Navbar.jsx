import React from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
            </div>
            <div className='nav-left'>
                <Link to='/login'>
                    <button className='sign-in'>Sign In</button>
                </Link>
                <Link to='/signup'>
                    <button className='sign-up'>Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
