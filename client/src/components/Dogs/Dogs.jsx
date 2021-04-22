import React from 'react'; 
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import Dog from '../Dog/Dog';
import '../Dogs/Dogs.css';

function Dogs(props){
    return(
        <div className='all'>
          
            {props.resultados.map(dog => <Dog
            name={dog.name}
            img={dog.img}
            temperaments={dog.temperament}
            id={dog.id}
            // onClose={() => onClose(c.id)}
          /> )}
            
        </div>
    )
}

function mapStateToProps(state) {
    return {
      resultados: state.resultados
    };
  }
  

export default  connect(
    mapStateToProps,
  )(Dogs);