import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar";
import { Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const[isLoggedIN,setIsLoggedIn]=useState(false);

  return (
  <div className="w-screen min-h-screen bg-richblack-900 flex flex-col bg-contain">
      <Navbar isLoggedIN={isLoggedIN}
      setIsLoggedIn={setIsLoggedIn}/>
      <Routes>

      <Route path="/" element={<Home isLoggedIn={isLoggedIN}/>}/>
      <Route path="/login" element={<Login 
      setIsLoggedIn={setIsLoggedIn}
      />}></Route>
      <Route path="/signup" element={<Signup 
      setIsLoggedIn={setIsLoggedIn}
      />}></Route>
      <Route path="/dashboard" element={
      <PrivateRoute isLoggedIN={isLoggedIN}><Dashboard/></PrivateRoute>
      }></Route>


      </Routes>

  </div>)
}

export default App;
