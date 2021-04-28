const { default: axios } = require('axios');
export const GET_DOGS = 'GET_DOGS'
export const GET_DOGS_DETAIL = 'GET_DOGS_DETAIL'
export const GET_DOGS_TEMPERAMENTS = 'GET_DOGS_TEMPERAMENTS'
export function getDogs(name) {
  return async (dispatch) => {
      if (!name) {
        var respall = await axios.get('http://10.116.0.2:3001/dogs')
        dispatch({
          type: GET_DOGS, payload: respall.data.map(dog => {
              return {
                  name: dog.name,
                  img: dog.img,
                  temperament: dog.temperament,
                  id:dog.id
              }
          })
      })
  }if (name) {
      const resp = await axios.get('http://localhost:3001/dogs?name=' + name)
      dispatch({
          type: GET_DOGS, payload: resp.data.map(dog => {
              return {
                  name: dog.name,
                  img: dog.img,
                  temperament: dog.temperament,
                  id:dog.id
              }
          })
      })
  }
}
}
export function getDogsDetail(id) {
  return async function (dispatch) {
    var resp2= await axios.get(`http://localhost:3001/dogs/${id}`)
    console.log(resp2.data)
        {
        dispatch({ type: 'GET_DOGS_DETAIL', payload: resp2.data.map(dog => {
          return {
            name: dog.name,
            img: dog.img,
            temperament: dog.temperament,
            id:dog.id,
            weight:dog.weight,
            height:dog.height,
            years:dog.years
        }
            })
      })
    }
  }
}

export function getDogsTemperaments() {
  return async function (dispatch) {
    var resp4= await axios.get(`http://localhost:3001/temperament`)
        {
        dispatch({ type: 'GET_DOGS_TEMPERAMENTS', payload: resp4.data })
      }
    }
  }



