import React, {useState} from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {Link} from "react-router-dom";

const Movie = ({item}) => {
    const [like, setLike] = useState([]);
    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.substring(0, num) + "..";
        } else {
            return str;
        }
    };
    return (
        <Link to={`/movie/${item.id}`}>
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img
                    className='w-full h-auto block'
                    src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                    alt={item?.title}
                />
                <div
                    className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                        {truncateString(item?.title || item?.name, 30)}
                    </p>
                    <p>
                        {like ? (
                            <FaHeart className='absolute top-4 left-4 text-gray-300'/>
                        ) : (
                            <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>
                        )}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Movie;