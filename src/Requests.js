const key = process.env.REACT_APP_IMDB_API_KEY


const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestNetflixOriginal: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_networks=213`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,

    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    resquestTVshow:`https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=1`,

    requestMovies:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestNew:`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`

}

export default requests