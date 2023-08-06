import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"

const Navbar = (props) => {
   let isLoggedIN=props.isLoggedIN;
   let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='flex justify-evenly'>
        <Link to="/">
        <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-3'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/About'>About</Link>
                </li>
                <li>
                <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
        </nav>
        {/* login - signup- logout - Dashboard */}
    <div className='flex ml-5 mr-3'>
    {
        !isLoggedIN && 
        <Link to="/login">
            <button>Login</button>
        </Link>
    }
    {
        !isLoggedIN && 
        <Link to="/signup">
            <button>Sign Up</button>
        </Link>
    }
    {
        isLoggedIN && 
        <Link to="/">
            <button onClick={()=>{
                setIsLoggedIn(false);
                toast.success("Logged Out")
            }}>Log Out</button>
        </Link>
    }
    {
        isLoggedIN && 
        <Link to="/dashboard">
            <button>DashBoard</button>
        </Link>
    }

    </div>
    </div>
  )
}

export default Navbar