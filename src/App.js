import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Dashboard from "./components/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import {useEffect, useState} from "react";

function App() {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:4000/auth/getUsers", {
            method: "GET",
            credentials: "include",
        })
            .then(res=>res.status === 200 && res.json())
            .then(data=>setUser(data))
            .catch(err=>console.error(err));
    },[])
    console.log(user)
    return (
        <div className={'bg-[#0d1117]'}>
            <NavBar/>
            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
                <Route element={<ProtectedRoutes/>}>
                    <Route path={'/explore'} element={<Explore/>}/>
                    <Route path={'/dashboard'} element={<Dashboard/>}/>
                </Route>
                {/*<ProtectedRoutes path='/explore' component={<Explore/>} auth={true}/>*/}

            </Routes>
        </div>
    );
}

export default App;
