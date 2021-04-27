import React from 'react'; 
import { Route } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';

function Deco(){

    return(
        <div className="grid grid-cols-3 grid-rows-3 bg-scroll w-90 h-96 mb-10 ml-20 mr-20 mt-10 rounded-2xl  bg-cover shadow-md" style={{
            backgroundImage:'url(https://atlantahumane.org/wp-content/uploads/2020/06/Adopt-a-Dog-Page-Header-Image.jpg)'
        }}>
            <div className='w-100 h-40 bg-white row-start-2 col-start-1 ml-20 rounded-2xl grid grid-cols-3 grid-rows-3'>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 col-start-1 col-end-4 self-center text-2xl font-extrabold ">Search any dog breed you want</p>
                <div className='row-start-2 col-start-1 col-end-4 self-center'>
            <Route  path='/home'
            component={Searchbar}/>
            </div>
            </div>
        </div>
    )
    }

export default (Deco);