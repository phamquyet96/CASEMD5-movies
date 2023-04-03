import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./pages/Home";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useSelector } from "react-redux";
import Register from "./pages/Register";
import Login from "./pages/Login";

library.add(fas)


function App() {

    const user = useSelector(state => {
        return state.user.currentUser
    })
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path={'login'} element={<Login />} />
                <Route path={'register'} element={<Register />} />
                <Route path={'home'} element={<Home />} />
                
                
                {/* {
                    user !== 'Username is not existed' && user !== 'Password is wrong' ?
                        <Route path={'/'} element={<LandingPage />}>
                        </Route> :
                        <Route path={'home'} element={<Home />} />
                } */}
            </Routes>
        </div>
    );
}

export default App;
