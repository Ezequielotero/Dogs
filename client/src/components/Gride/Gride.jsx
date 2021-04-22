import React, { useState, useEffect} from 'react'; 
import Dogs from '../Dogs/Dogs'; 
import '../Gride/Gride.css';
import {getDogs} from '../../actions/actions'
import { useDispatch,useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

function Gride(){
    const perrekes = useSelector(state => state.all)
    const [page, setPage] = useState(0);
    const [dogs, setDogs] = useState([])
    // const nextPage = () => { page < max && setPage(page + 1) }
    // const prevPage = () => { page > 0 && setPage(page - 1) }
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getDogs())
    })
    // useEffect(()=>{
    //     setDogs(perrekes.slice(10 * (page), (10 * page) + 10)) 
    // })
    return(
        <div className='all'>
            <div className='cards'>
            <Dogs></Dogs>
            </div>
        </div>
    )
}
export default (Gride)