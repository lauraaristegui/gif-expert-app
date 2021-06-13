import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs';

//category que paso por argumento va a caer como si fueran props
const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data:[],
        loading:true
    });
   //hace el efecto cuando solo cambia la categoría 
  useEffect(() =>{
   getGifs(category)
   //devuelve una promesa con las imagenes
     .then(imgs => {
 
    //cuando tenemos la data se llama al setState cambiando la informacion, el setState va a disparar una renderización en mi componente (gifGrid)
       setState({
          data: imgs,
          loading: false
      });
  })
},[category])

    return state;
}

export default useFetchGifs;