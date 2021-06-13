import React from 'react';
 import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';

//me traigo como props category que es mi array con la categoria 
const GifGrid = ({category}) => {
 //a data lo puedo renombrar con images
  const {data:images, loading} = useFetchGifs(category);
  


  return (
    <>
         <h3 className="animate__animated animate__fadeIn">{category}</h3> 
        {loading && <p className="animate__animated animate__flash">Loading...</p>}
    <div className= "card-grid">
       { 
         images.map(img => (
          <GifItem  
          key={img.id}
         {...img}
          /> 
         ))
       }
    </div>
    </>
  )
}

export default GifGrid
