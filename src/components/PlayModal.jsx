import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";



function MovieMetal() {
    const { id} = useParams();
    const [detail,setDetail]=useState([]);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e9e9d8da18ae29fc430845952232787c`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            console.log(res.data)
            setDetail(res.data.results)
        }).catch(err => {
            console.log(err)
        })
    },[])

    return (
        <>
            {detail && (<div className="py-9">
                <div className="flex flex-col gap-10">
                    {detail.slice(0,1).map((item) => (
                        <div key={item.id}>
                            <h1 className="flex justify-center mt-2 items-center text-xl text-white font-medium p-3 bg-secondary inline-block rounded-lg">
                                {item.name}
                            </h1>
                            <div className="h-screen flex justify-center items-center">
                                    <iframe
                                        className="w-3/4 h-3/4 p-0 object-fill "
                                        src={`https://www.youtube.com/embed/${item.key}`}
                                        title="Youtube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>)}
        </>
    )
}
export default MovieMetal;