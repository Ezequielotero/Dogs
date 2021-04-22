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
            <form
          onSubmit={(e)=>handleSubmit(e)}>
            <input  className="input" type="text" placeholder="Agregar" value={state.state} onChange={(e)=>handleChange(e)}/>
            <input  className="boton" type="submit" value="Agregar" />
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