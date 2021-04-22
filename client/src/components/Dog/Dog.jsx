import React, { useState } from 'react'; 
import {Link} from "react-router-dom";
import './dog.css';
import {getDogsDetail} from '../../actions/actions'
import { connect } from "react-redux"
function Dog(props){
    const [state, setState] = useState(props.id)
    return(
        <div className='div' >
            <Link to={`/detail`}>
            <h5 onClick={()=>props.getDogsDetail(state)} className='card-title'>{props.name}</h5>
            </Link>
            <h5 className='temperament'>{props.temperaments}</h5>
            {<img className='image' src={props.img} alt=''/> }
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        getDogsDetail: id => {
        dispatch(getDogsDetail(id))
    },
    }
}
function mapStateToProps(state) {
    return {
        detalle: state.detalle
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dog);
