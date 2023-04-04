
import React from 'react';
import Main from "../components/Main";
import MenubarA from "../components/Menubar/Menubar+18";
import Row from "../components/Row";
import requests from "../Requests";
import Footer from "../components/Footer/Footer";

const Movies = () => {
    return (
        <>
            <MenubarA/>
            <Main/>
            <Row rowID='1' title="Movies" fetchURL={requests.requestTopRated}/>
            <Row rowID='2' title="Trending" fetchURL={requests.requestTrending}/>
            
            <Footer/>
        </>
    );
};

export default Movies;