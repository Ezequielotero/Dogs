import React from 'react'; 
import {Link} from "react-router-dom";
import './Navbar.css'
function NavBar(){
    return(
        <div className='h-20  grid grid-cols-3 grid-rows-1 shadow-lg '>
            <Link className='row-start-1 row-end-1 col-start-1 col-end-2 justify-self-start  self-center' to ='/home'>
            <p className='text-3xl font-extrabold  ml-20 self-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 '>home</p>
            </Link>
           <div className='hola'>
            </div>
        </div>
    )
}
export default NavBar