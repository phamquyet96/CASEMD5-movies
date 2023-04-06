import {ArrowDropDown, Search} from "@mui/icons-material";
import {useState} from "react";
import "./Menubar.css";
import React from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {UserAuth} from "../../context/AuthContext";

const Menubar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const {user, logOut} = UserAuth();
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    const navigate = useNavigate();

    const HandleLogout = async () => {
        try {
            await logOut();
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className={isScrolled ? "menubar scrolled" : "menubar"}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <NavLink className="navbar-item" activeClassName="is-active" to="/home" exact>
                        <span> Home </span>
                    </NavLink>

                    <NavLink className="navbar-item" activeClassName="is-active" to="/tvshow" exact>
                        <span>TV Show</span>
                    </NavLink>

                    <NavLink className="navbar-item" activeClassName="is-active" to="/movies" exact>
                        <span>Movies</span>
                    </NavLink>

                    <NavLink className="navbar-item" activeClassName="is-active" to="/new" exact>
                        <span>New and Popular</span>
                    </NavLink>

                    <NavLink className="navbar-item" activeClassName="is-active" to="/mylist" exact>
                        <span>My List</span>
                    </NavLink>

                </div>
                <div className="right">
                    <input
                        type="text"
                        className="w-full p-2 bg-slate-600 outline-none text-white"
                        placeholder="Type here to search..."

                    ></input>
                    <button className="p-4 bg-primary text-white rounded-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                    <Search title={"result"} rowID={1}/>
                    <Search className="icon"/>
                    <img
                        src="https://i0.wp.com/chatsach.com/wp-content/uploads/2015/02/jindo1.png?fit=512%2C512&ssl=1"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <Link to='/mylist'>
                                <button className='text-white pr-4'>{user?.email}</button>
                            </Link>
                            <button
                                onClick={HandleLogout}
                                className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;