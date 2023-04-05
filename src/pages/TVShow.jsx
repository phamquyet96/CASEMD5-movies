
import React, {useEffect} from 'react';
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
import Footer from "../components/Footer/Footer";
import Menubar from "../components/Menubar/Menubar";

const TvShow = () => {
    return (
        <>
            <Menubar/>
            <Main/>
            <Row rowID='1' title="TV Show" fetchURL={requests.requestTVShow}/>
            <Row rowID='2' title="Trending" fetchURL={requests.requestTrending}/>
            
            <Footer/>
        </>
    );
};

export default TvShow;