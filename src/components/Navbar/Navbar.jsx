import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='nav' >
            <h1 className='h1logo'>NETFLIX</h1>
            <div>
                <button className='sign-in'>Sign In</button>
                <button className='sign-up'>Sign Up</button>
            </div>
        </div>
    )
}


export default Navbar