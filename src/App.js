import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar";
import { Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";


function App() {
  const[isLoggedIN,setIsLoggedIn]=useState(false);

  return (<div>
      <Navbar isLoggedIN={isLoggedIN}
      setIsLoggedIn={setIsLoggedIn}></Navbar>
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>


      </Routes>

  </div>)
}

export default App;
