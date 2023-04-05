import {Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./pages/Home";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import TVShow from "./pages/TVShow";
import Movies from "./pages/Movies";
import New from "./pages/New";
import Detail from "./components/Detail/Detail";
import PlayModal from "./components/PlayModal";
import {AuthContextProvider} from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import MyList from "./pages/MyList";


library.add(fas)


function App() {
    return (
        <AuthContextProvider>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/mylist" element={<ProtectedRoute><MyList/></ProtectedRoute>}></Route>
                    <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
                    <Route path="/tvShow" element={<ProtectedRoute><TVShow/></ProtectedRoute>}></Route>
                    <Route path="/movies" element={<ProtectedRoute><Movies/></ProtectedRoute>}></Route>
                    <Route path="/new" element={<ProtectedRoute><New/></ProtectedRoute>}></Route>
                    <Route path="/movie/:id" element={<ProtectedRoute><Detail/></ProtectedRoute>}></Route>
                    <Route path="/play/:id" element={<ProtectedRoute><PlayModal/></ProtectedRoute>}></Route>
                </Routes>
            </div>
        </AuthContextProvider>
    );
}

export default App;