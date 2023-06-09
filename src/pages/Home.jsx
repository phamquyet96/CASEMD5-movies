import React from 'react';
import Main from "../components/Main";
import Menubar from "../components/Menubar/Menubar";
import Row from "../components/Row";
import requests from "../Requests";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Menubar/>
            <Main/>
            <Row rowID='1' title="Trending" fetchURL={requests.requestTrending}/>
            <Row rowID='2' title="Up Coming" fetchURL={requests.requestUpcoming}/>
            <Row rowID='3' title="Popular" fetchURL={requests.requestPopular}/>
            <Row rowID='4' title="Top Rated" fetchURL={requests.requestTopRated}/>
            <Row rowID='5' title="Horror" fetchURL={requests.requestHorror}/>
            <Row rowID='6' title="Netfllix Original" fetchURL={requests.requestNetflixOriginal}/>
            <Footer/>
        </>
    );
};


export default Home;
