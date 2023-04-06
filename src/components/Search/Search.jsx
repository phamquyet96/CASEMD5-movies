import {useEffect, useState} from "react";
import React from "react";
import Debounce from "../Debounce/Debounce";
import axios from "axios";
import Menubar from "../Menubar/Menubar";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

const Search = ({title, rowID}) => {
    const [filter, setFilter] = useState("");
    const [url, setUrl] = useState(
        `https://api.themoviedb.org/3/movie/popular?api_key=e9e9d8da18ae29fc430845952232787c`
    );
    const filterDebounce = Debounce(filter, 500);
    useEffect(() => {
        if (filterDebounce) {
            console.log(1111, filterDebounce)
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
            }
        }).then((response) => {
            setData(response.data.results);
            console.log(data)
        });
    }, [url]);
    const slideLeft = () => {
        const slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        const slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <div>
                <Menubar/>
                <div className="grid grid-cols-4 gap-10">
                    <>
                        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
                        <div className='relative flex items-center group'>
                            <MdChevronLeft
                                onClick={slideLeft}
                                className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                                size={40}
                            />
                            <div
                                id={'slider' + rowID}
                                className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
                            >
                                {data &&
                                    data.length > 0 &&
                                    data.map((item) => (
                                        <div
                                            className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                                            <img
                                                className='w-full h-auto block'
                                                src={`https://image.tmdb.org/t/p/w500/${item?.profile_path}`}
                                            />
                                            <div
                                                className="text-lg text-white text-center font-bold ">{item?.original_title}</div>
                                            <div
                                                className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <MdChevronRight
                                onClick={slideRight}
                                className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                                size={40}
                            />
                        </div>
                    </>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Search;