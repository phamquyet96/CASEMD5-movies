import axios from "axios";
import React, {useEffect, useState} from "react";
import requests from "../Requests";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import {faCircleInfo, faPlay} from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestNetflixOriginal).then((response) => {
            setMovies(response.data.results);
        });
    }, []);
    console.log(movie)

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.substring(0, num) + "...";
        } else {
            return str;
        }
    };
    return (
        <>

            <div className='w-full h-[600px] text-white'>
                <div className='w-full h-full'>
                    <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
            <div className='w-full h-[800px] text-white'>
                <div className='w-full h-full'>
                    <div className='absolute w-full h-[800px] bg-gradient-to-t from-gray-rgb '></div>
                    <img
                        className='w-full h-full object-cover'
                        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                        alt={movie?.name}
                    />
                    <div className='absolute w-full top-[20%] p-4 md:p-8'>
                        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.name}</h1>
                        <div className='my-4'>
                            <button className='border-radius-15px bg-white rounded text-black border-gray-300 py-2 px-5'>
                                <FontAwesomeIcon icon={faPlay} style={{ color: "#121212",marginRight: "5px" }}/>  Play
                            </button>
                            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
                                Watch Later
                            </button>
                        </div>
                        <p className='text-gray-400 text-sm'>
                            Released: {movie?.release_date}
                    <div className='absolute w-full top-[30%] p-5 md:p-10'>
                        <h1 className='text-5xl md:text-7xl font-bold'>{movie?.name}</h1>
                        <div className='my-6'>
                            <button className='bg-white rounded text-black border-gray-300 py-1 px-5 text-xl font-medium
                            transition-colors duration-0 ease-in-out hover:bg-gray-300 hover:text-black'>
                                <FontAwesomeIcon icon={faPlay} style={{ color: "#121212",marginRight: "5px" }}/>  Play
                            </button>
                            <button className='bg-gray-500 bg-opacity-50 border-gray text-white font-normal ml-2 py-1 px-5 text-xl rounded
                            transition-colors duration-0 ease-in-out hover:bg-gray-500 hover:bg-opacity-30 hover:text-white'>
                                <FontAwesomeIcon icon={faCircleInfo} style={{color: "#ffffff",marginRight: "5px"}} /> More Information
                            </button>
                        </div>
                        <p className='text-gray-400 text-sm pb-1'>
                            Released: {movie?.release_date || movie?.first_air_date}
                        </p>
                        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                            {truncateString(movie?.overview, 300)}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;

