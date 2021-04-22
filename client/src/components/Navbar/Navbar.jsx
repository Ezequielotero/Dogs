import React from 'react'; 
import Searchbar from '../Searchbar/Searchbar';
import { Route } from 'react-router-dom';
import {Link} from "react-router-dom";
import './Navbar.css'
function NavBar(){
    return(
        <nav className='nav'>
            <p className='home'>home</p>
            <div className='hola'>
                <Link to ='/home/create'><button>post</button></Link>
            <Route  path='/home'
            component={Searchbar}/>
            </div>
        </nav>
    )
}
export default NavBar