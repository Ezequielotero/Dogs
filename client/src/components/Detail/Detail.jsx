import React from 'react'; 
import { connect } from "react-redux";

function Detail(props){

    return(
        <div >
                <div className='flex'>
            <div className='mt-10 mr-20 rounded-2xl ml-20  h-60 shadow-lg '>
                <div className='pt-5'>
            <h1 className='font-extrabold text-2xl'>Name🐕: {props.detalle[0]?.name}</h1>
            <h2 className='font-extrabold text-2xl'>Temperament😊: {props.detalle[0]?.temperament}</h2>
            <h2 className='font-extrabold text-2xl'>Weight⚖️: {props.detalle[0]?.weight}</h2>
            <h2 className='font-extrabold text-2xl'>Height📊: {props.detalle[0]?.height}</h2>
            <h2 className='font-extrabold text-2xl'>Life span❤️: {props.detalle[0]?.years}</h2>
            </div>
            </div>
            <img className=' h-96 mt-10 w-2/3 mr-10 rounded-2xl shadow-lg' src={props.detalle[0]?.img} alt=""/>
        </div>
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