import {Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./pages/Home";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import TVShow from "./pages/TVShow";
import Movies from "./pages/Movies";
import New from "./pages/New";
import Detail from "./components/Detail/Detail";


library.add(fas)


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/tvshow" element={<TVShow/>}></Route>
                <Route path="/movies" element={<Movies/>}></Route>
                <Route path="/new" element={<New/>}></Route>
                <Route path="/movie/:id" element={<Detail/>}></Route>
            </Routes>
            
        </div>
        
    );
}

export default App;