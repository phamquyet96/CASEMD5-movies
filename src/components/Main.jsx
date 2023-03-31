import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";


function Movie() {
    const [movies, setMovies] = useState([]);
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            console.log(res.data)
            setMovies(res.data.results)
        }).catch(err => {
            console.log(err)
        })
    }, [flag])

    return (
        <>
            <br/>
            <div className="container">
                <Stack direction="row" spacing={4}>
                    <TableContainer>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell >Poster</TableCell>
                                    <TableCell >Vote</TableCell>
                                    <TableCell>Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {movies && movies.map((movie, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell component="th" scope="row">
                                            {movie.title}
                                        </TableCell>
                                        <TableCell ><img
                                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                            style={{width: "3 00px", height: "200px"}}></img></TableCell>
                                        <TableCell >{movie.vote_average}</TableCell>
                                        <TableCell >{movie.release_date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>

                ))}

            </div>
            <div
                id={'slider'}
                className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
            >
                {movies.map((item, id) => (
                    <Movie key={id} item={item} />
                ))}
            </div>
        </>
    )
}

export default Movie;