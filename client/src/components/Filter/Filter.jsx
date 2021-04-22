import React from 'react'; 
import { connect } from "react-redux";

function Filter(props){
console.log(props.detalle)
    return(
       a
    )
    }
function mapStateToProps(state) {
    return {
        detalle: state.detalle
    };
    }  
export default connect(mapStateToProps)(Filter);