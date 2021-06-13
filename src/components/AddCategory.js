import React, {useState} from 'react'
import PropTypes from 'prop-types'; 

 const AddCategory = ({setCategories}) => {

 const [inputValue, setInputValue] = useState('');

const handleInputChange = (e) =>{
  setInputValue(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
   // console.log('submit hecho')
   //estoy trayendo como props a setCategories que tiene el estado anterior de categories y va a retornar un nuevo array con el inputValue
    if(inputValue.trim().length > 2){
     setCategories(categ => [inputValue])
     setInputValue('')
    }
  
}

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
export default AddCategory
