import React, { useState } from 'react'; 
import './Searchbar.css'
import {getDogs} from '../../actions/actions'
import { connect } from "react-redux";

function Searchbar(props){
    
    const [state, setState] = useState("")
    console.log(state)
    function handleChange(e) {
        setState(e.target.value)
        }
    function handleSubmit(e) {
        e.preventDefault();
        props.getDogs(state)
        }
    return(
            <form className='grid grid-cols-3 grid-rows-3'
          onSubmit={(e)=>handleSubmit(e)}>
            <input  className="transform hover:scale-105 col-start-1 col-end-3 row-start-2 ml-4 mt-4  bg-white flex items-center rounded-full shadow-xl rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none font-extrabold" type="text" placeholder="Search" value={state.state} onChange={(e)=>handleChange(e)}/>
            <input  className="col-start-3 col-end-3 row-start-2 ml-8 mt-4 r mr-8 btn btn-blue btn-blue:hover font-extrabold" type="submit" value="Search" />
            </form>

    )
    
    }
// function mapStateToProps(state) {
//     return {
//         dogs: state.resultados
//     };
//     }  
const mapDispatchToProps = dispatch => {
    return {
      getDogs: dog => {
        dispatch(getDogs(dog))
      },
    }
}
    
export default connect(
    null,
    mapDispatchToProps)(Searchbar);