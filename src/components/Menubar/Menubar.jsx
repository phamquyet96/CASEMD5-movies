import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import "./Menubar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Menubar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "menubar scrolled" : "menubar"}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                     <NavLink className="navbar-item" activeClassName="is-active" to="/home" exact >
	                       <span> Home </span>
                    </NavLink>

                    <NavLink className="navbar-item" activeClassName="is-active" to="/tvshow" exact >
                        <span>TV Show</span>
                    </NavLink>

                    <NavLink className="navbar-item" activeClassName="is-active" to="/movies" exact>
                        <span>Movies</span>
                    </NavLink>

                    <NavLink className="navbar-item" activeClassName="is-active" to="/new" exact>
                        <span>New and Popular</span>
                    </NavLink>

                    <NavLink className="navbar-item" activeClassName="is-active" to="/mylist" exact >
                        <span>My List</span>
                    </NavLink>

                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        src="https://i0.wp.com/chatsach.com/wp-content/uploads/2015/02/jindo1.png?fit=512%2C512&ssl=1"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;