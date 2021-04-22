import axios from 'axios';
import React,{ useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getDogsTemperaments} from '../../actions/actions'
import './Post.css'

function Post(){
    const [input, setInput] = useState({
        name: '',
        weight: '',
        height:'',
        years:'',
        });
        const [temp, setTemp] = useState({
            Temperaments:[]
        })  
    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        setInput({
            ...input,
            [name]: value 
        })
        }
        
        function handleChange2(e) {
        if (temp.Temperaments.indexOf(e.target.value)===-1) {
            setTemp({
            ...temp,
            Temperaments: temp.Temperaments.concat(e.target.value)
        })
    }
}
    console.log(temp)


        
        async function handleSubmit(e) {
            var todo={}
            await axios({
                    method:'post',
                    url:'http://localhost:3001/dogs',
                    data:
                    todo={
                        ...input,...temp
                    }
                    
                })
            }
            const perrekes = useSelector(state => state.temperaments)
            let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getDogsTemperaments())
    }, [])
    return(
        <div>
            <form action="submit" onSubmit={handleSubmit}>
            <input name='name' type="text" placeholder='name' onChange={handleChange}/>
            <input name='weight' type="text" placeholder='weight' onChange={handleChange}/>
            <input name='height' type="text" placeholder='height' onChange={handleChange}/>
            <input name='years' type="text" placeholder='years' onChange={handleChange}/>
            <select className='select' multiple name="Temperaments" id="" onChange={handleChange2} >{
                perrekes.map(temp=>{
                    return(
                        <option value={temp}>{temp}</option>
                    )
                })
            }
            </select>
            <button type='submit'>Agregar</button>
            </form>
        </div>
    )
}
export default Post