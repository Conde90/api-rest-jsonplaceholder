import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Importar componntes creados
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Photos from "./components/Photos";
import ToDos from "./components/ToDos";

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<NavBar/>}>
                <Route path="posts" element={<Posts />}/>
                <Route path="comments" element={<Comments />}/>
                <Route path="photos" element={<Photos />}/>
                <Route path="todos" element={<ToDos />}/>
                <Route path="users" element={<Users />}/>

                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App