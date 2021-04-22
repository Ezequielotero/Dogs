import React from 'react'; 
import {Link} from "react-router-dom";
import './homepage.css'
function HomeButton(){
    return(
        <div className='bg'>
            <img className='img' src="https://wsava.org/wp-content/uploads/2020/11/Feature-image_Australian-Shepherd.jpg" alt=""/>
            <div className='divbu'>
            <h1 className='text' >Search any dog breed you want</h1>
            <Link to='/home'>
            <button className='button'>Search dogs!</button>
            </Link>
            </div>
            </div>
    )
}
export default HomeButton