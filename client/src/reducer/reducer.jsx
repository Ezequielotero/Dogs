import { GET_DOGS } from '../actions/actions'
import { GET_DOGS_DETAIL } from '../actions/actions'
import { GET_DOGS_TEMPERAMENTS } from '../actions/actions'
const initialState={
    detalle:[],
    resultados:[],
    all:[],
    temperaments:[]
  }
  function rootReducer(state=initialState , action) {
    if (action.type === GET_DOGS) {
      return {...state,resultados: action.payload}

    }
  if (action.type === GET_DOGS_DETAIL) {
    
    return {...state,detalle: action.payload}
  }
  if (action.type === GET_DOGS_TEMPERAMENTS) {
    
    return {...state,temperaments: action.payload}
  }
  return state
}
    export default rootReducer;