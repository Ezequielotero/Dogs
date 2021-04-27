import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dog.css";
import { getDogsDetail } from "../../actions/actions";
import { connect } from "react-redux";
function Dog(props) {
  return (
    <div className="grid grid-cols-3 grid-rows-4 w-2/6 h-80 ml-10 mb-10 h-96 rounded-2xl bg-wheat shadow-md transform hover:scale-110 ">
      <div className ='shadow-lg col-start-1 rounded-2xl col-end-4 'style={{
            backgroundImage:'url(https://studiousguy.com/wp-content/uploads/2019/12/Grass-Root-Root-System-compressed.jpg)'}}>
      <div className="font-extrabold text-white row-start-1 col-end-4 col-start-1 self-center text-3xl pt-7 bg-cover">
        <Link to={`/detail`}>
          <h5 onClick={() => props.getDogsDetail(props.id)}>{props.name}</h5>
        </Link>
        </div>
      </div>
      <h5 className="row-start-4 col-end-4 col-start-1 self-center font-extrabold ">{props.temperaments}</h5>
      {<img className="row-start-2 row-end-4 col-start-2 col-end-3 rounded-2xl shadow-md h-44 w-80 justify-self-center self-center mt-10" src={props.img} alt="" />}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDogsDetail: (id) => {
      dispatch(getDogsDetail(id));
    },
  };
};
function mapStateToProps(state) {
  return {
    detalle: state.detalle,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dog);
