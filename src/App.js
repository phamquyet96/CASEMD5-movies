import {Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import ListItem from "./components/listItem/ListItem";
import list from "./components/list/List";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
