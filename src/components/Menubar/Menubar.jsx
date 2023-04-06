import { ArrowDropDown} from "@mui/icons-material";
import {useEffect, useState} from "react";
import "./Menubar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Debounce from "../Debounce/Debounce";
import axios from "axios";
import {Action} from "../Detail/Detail";
import Search from "../Search/Search"

const Menubar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [filter, setFilter] = useState("");
    const [url, setUrl] = useState(
        `https://api.themoviedb.org/3/movie/popular?api_key=e9e9d8da18ae29fc430845952232787c`
    );
    const filterDebounce = Debounce(filter, 500);
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        console.log(e.target.value)
    };
    useEffect(() => {
        if (filterDebounce) {
            console.log(1111,filterDebounce)
            setUrl(
                `https://api.themoviedb.org/3/search/movie?api_key=931a8d4e4647b95275eae77fba94d7b2&query=${filterDebounce}`
            );
        } else {
            setUrl(
                `https://api.themoviedb.org/3/movie/popular?api_key=931a8d4e4647b95275eae77fba94d7b2`
            );
        }
    }, [filterDebounce]);

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(1)
        axios.get(url, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }}).then((response) => {
            console.log(response)
            setData(response.data.results);
        });
    }, [url]);

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
                <div className="right" >
                    <input
                        type="text"
                        className="w-full p-2 bg-slate-600 outline-none text-white"
                        placeholder="Type here to search..."
                        onChange={handleFilterChange}

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
                    <img
                        src ="https://i0.wp.com/chatsach.com/wp-content/uploads/2015/02/jindo1.png?fit=512%2C512&ssl=1"
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