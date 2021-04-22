import React from 'react'; 
 import './detail.css'
import { connect } from "react-redux";

function Detail(props){

    return(
        <div className='detail'>
            <div className='column'>
            <h1 className='h1'>{props.detalle[0]?.name}</h1>
            <h2 className='temper'>{props.detalle[0]?.temperament}</h2>
            <h2>{props.detalle[0]?.weight}</h2>
            <h2>{props.detalle[0]?.height}</h2>
            <h2>{props.detalle[0]?.years}</h2>
            </div>
            <img src={props.detalle[0]?.img} alt=""/>
        </div>
    )
    }
function mapStateToProps(state) {
    return {
        detalle: state.detalle
    };
    }  
export default connect(
    mapStateToProps)(Detail);