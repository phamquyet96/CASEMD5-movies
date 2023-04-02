import {Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home";

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
