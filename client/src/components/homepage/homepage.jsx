import React from 'react'; 
import {Link} from "react-router-dom";

function HomeButton(){
    return(
        <div>
        <div className='w-full h-screen grid grid-cols-3 grid-rows-5' style={{
            backgroundImage:'url(https://wsava.org/wp-content/uploads/2020/11/Feature-image_Australian-Shepherd.jpg)'}}>
            <div className='grid grid-cols-3 grid-rows-4 w-100 h-60 bg-white row-start-3 col-start-2 col-end-3 rounded-2xl '>
            <h1 className='row-start-2 row-end-4 col-start-1 col-end-4 text-3xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500' >Search any dog breed you want</h1>
            <Link className='row-start-3 row-end-5 col-start-1 col-end-4'to='/home'>
            <input  className="transform hover:scale-110 col-start-3 col-end-3 row-start-2 ml-8 mt-4 r mr-8 btn btn-blue btn-blue:hover font-extrabold" type="submit" value="Search dogs!" />
            </Link>
            </div>
            <img className='row-start-5 col-start-2 self-end  justify-self-center w-10 animate-bounce' src="https://image.flaticon.com/icons/png/512/2989/2989941.png" alt=""/>
            </div>
            <div className='w-full h-screen grid grid-cols-3 grid-rows-4 bg-center  ' style={{
            backgroundImage:'url(https://cdn.dribbble.com/users/185738/screenshots/15298921/media/7b671f8fd03b8f9bdae94ec133e55acb.gif)'}}>
                <div className='row-start-1  col-start-1 col-end-2 self-end ' >
            <h1 className=' text-6xl font-extrabold bg-clip-text text-transparent bg-white' >You can</h1>
            </div>
            <div  className='row-start-2 row-end-4 col-start-1 col-end-2 '>
            <h1 className='text-6xl font-extrabold  bg-clip-text text-transparent bg-white' >also search</h1>
            </div>
            <div  className='row-start-2 col-start-1 col-end-2 self-start pt-20'>
            <h1 className='row-start-2 row-end-4 col-start-1 col-end-4 text-6xl font-extrabold text-white ' >their details</h1>
            </div>
            </div>
            </div>
    )
}
export default HomeButton