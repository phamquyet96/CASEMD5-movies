import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='nav' >
            <h1 className='h1logo'>NETFLIX</h1>
            <div>
            <div className="logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
            </div>
            <div className='nav-left'>
                <button className='sign-in'>Sign In</button>
                <button className='sign-up'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar;
