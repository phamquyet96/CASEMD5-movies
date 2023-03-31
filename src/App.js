import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Menubar from "./components/Menubar/Menubar";

function App() {
    return (
        <div className="App">
            <Menubar/>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
