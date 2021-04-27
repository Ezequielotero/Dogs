import React,{ useState,useEffect } from 'react';
import { connect, useSelector } from "react-redux";
import Dog from '../Dog/Dog';
import '../Dogs/Dogs.css';

function Dogs(){
  const dog = useSelector((state)=> state.resultados)
  const[page,setPage]= useState(0)
  const[max, setMax]= useState(0)

  useEffect(() => {
    if (dog && dog.length > 0) {
      setMax(dog && dog.length-8)
      setPage(0)
    }
  },[dog])
  const nextPage=()=> {page<=max && setPage(page+6)}
  const prevPage=()=> {page>0 && setPage(page-6)}
    return(
      <div>
        <div className='all'>
            {dog.slice(page,page+6).map(dog => <Dog
            name={dog.name}
            img={dog.img}
            temperaments={dog.temperament}
            id={dog.id}
          /> )}
        </div>
          <div>
          <button className='btn btn-blue btn-blue:hover font-extrabold ml-10 mb-5 transform hover:scale-110' onClick={prevPage}>{"<<--"}</button>
          <button className='btn btn-blue btn-blue:hover font-extrabold ml-5 mb-5 transform hover:scale-110' onClick={nextPage}>{"-->>"}</button>
        </div>
        </div>
    )
}
export default Dogs