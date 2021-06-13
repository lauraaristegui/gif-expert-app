import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  // esto aca no se usa lo deje a modo de ejemplo
  // const handleAdd = ()=> {
  //    setCategories([...categories, 'Hunter'])
  // }

  
  return (
    <>
     <h2>GifExpertApp</h2>
     <AddCategory setCategories={setCategories}/>
     <hr/> 
       <ol>
           {
               categories.map(category => (
                  <GifGrid 
                  key={category}
                  category={category} />
                  ))
               
               }
       </ol>

    </>
  )
}

export default GifExpertApp
