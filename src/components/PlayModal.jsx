import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import MuiModal from '@mui/material/Modal'
import {XIcon} from "@heroicons/react/solid";
import ReactPlayer from "react-player";

// const Player = () => {
//     const {movieId} = useParams();
//     const [play, setPlay] = useState([]);
//
//
//     useEffect(() => {
//         axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=e9e9d8da18ae29fc430845952232787c`, {
//             headers: {
//                 Authorization: "Bearer " + localStorage.getItem('token')
//             }
//         }).then(res => {
//             setPlay(res.data.results)
//         }).catch(err => {
//             console.log(err)
//         })
//     }, [])
//
//     return (
//         <MuiModal
//                   className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
//         >
//             <>
//                 <button
//                     className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
//                 >
//                     <XIcon className="h-6 w-6"/>
//                 </button>
//                 {play && (<div className="py-10">
//                     <div className="flex flex-col gap-10">
//                         {play.slice(0, 1).map((item) => (
//                             <div key={item.id}>
//                                 <h3 className="mb-5 text-xl text-white font-medium p-3 bg-secondary inline-block rounded-lg">
//                                     {item.name}
//                                 </h3>
//                                 <div className="relative pt-[56,25%]">
//                                     <ReactPlayer
//                                         url={`https://www.youtube.com/watch?v=${item.key}`}
//                                         width="100%"
//                                         height="100%"
//                                         style={{position: 'absolute', top: '0', left: '0'}}
//                                         playing
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>)}
//             </>
//         </MuiModal>
//     )
// }
//
// export default Player;

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