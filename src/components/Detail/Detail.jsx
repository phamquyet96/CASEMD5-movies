import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import "./Detail.css"



const Detail=()=>{
    const {id}=useParams();
    const [detail,setDetail]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
    function sleep() {
        return new Promise((resolve) => {
            setTimeout(resolve, 300)
        })
    }
    useEffect(()=>{

        async function  fetchData() {
            try {
                setIsLoading(true)
                let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem('token')
                    }
                })
                await sleep();
                if(res) {
                    setDetail(res.data)
                }
                setIsLoading(false);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    },[])

    const { backdrop_path, poster_path, original_title, genres, overview } = detail;
    return(

            <>
                {!isLoading ?
                    (<div className="pb-10">
                        <div className="w-full h-[600px] relative">
                            <div className="overlay absolute inset-0 bg-black bg-opacity-60"></div>
                            <div
                                className="w-full h-full bg-cover bg-no-repeat"
                                style={{
                                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
                                }}
                            ></div>
                        </div>
                        <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                                className="w-full h-full object-cover rounded-xl"
                                alt=""
                            />
                        </div>
                        <h1 className="text-white text-center text-4xl mb-10" >{original_title}</h1>
                        {genres && (
                            <div className="flex text-white items-center justify-center gap-x-5 mb-10">
                                {genres.map((item) => (
                                    <span
                                        key={item.id}
                                        className="py-2 px-4 border-[#F62682] text-primary border rounded-lg"
                                    >
                {item.name}
              </span>
                                ))}
                            </div>
                        )}
                        <p className="text-center text-white text-lg leading-relaxed max-w-[600px] mx-auto mb-10">
                            {overview}
                        </p>
                        <Action title="Action" rowID="1" />
                        <MovieMeta ></MovieMeta>
                        <Similar filmID="2" header="Similar Film"/>
                    </div>)
                :(
                        <div className="line-loading"></div>
                    )}

            </>

    )
}
const Action = ({ title, rowID }) => {

    const {id}=useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`http://api.themoviedb.org/3/movie/${id}/casts?api_key=e9e9d8da18ae29fc430845952232787c`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }}).then((response) => {
            setMovies(response.data.cast);
        });
    }, []);

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
                    {movies.map((item, id) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                            <img
                                className='w-full h-auto block'
                                src={`https://image.tmdb.org/t/p/w500/${item?.profile_path}`}
                            />
                            <div className="text-lg text-white text-center font-bold ">{item?.original_name}</div>
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
    );
};

function MovieMeta() {
    const { id} = useParams();
    const [detail,setDetail]=useState([]);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e9e9d8da18ae29fc430845952232787c`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            setDetail(res.data.results)
        }).catch(err => {
            console.log(err)
        })
    },[])

            return (
                <>
                    {detail && (<div className="py-10">
                        <div className="flex flex-col gap-10">
                            {detail.slice(0,2).map((item) => (
                                <div key={item.id}>
                                    <h3 className="mb-5 text-xl text-white font-medium p-3 bg-secondary inline-block rounded-lg">
                                        {item.name}
                                    </h3>
                                    <div className="w-full aspect-video">
                                        <iframe
                                            width="400"
                                            height="500"
                                            src={`https://www.youtube.com/embed/${item.key}`}
                                            title="Youtube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full object-fill"
                                        ></iframe>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>)}

                </>
            )
}




const Similar = ({ header, filmID }) => {

    const {id}=useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }}).then((response) => {
            setMovies(response.data.results);
        });
    }, []);

    const slideLeft = () => {
        const slider = document.getElementById('slider' + filmID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        const slider = document.getElementById('slider' + filmID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{header}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
                <div
                    id={'slider' + filmID}
                    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
                >
                    {movies.map((item, id) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                            <img
                                className='w-full h-auto block'
                                src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}

                            />
                            <div className="text-sm text-white text-center font-bold ">{item?.original_title}</div>
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
    );
};
export default Detail;