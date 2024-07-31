import React, {useEffect, useState} from 'react'
import "./UpdatePlant.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import addplant from "./../AddPlant/AddPlant"

function UpdatePlant() {
  const { id } = useParams();

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const updateplant = ()=>{

  }
  const loadPlant = async ()=>{
    if(!id){
      return;
    }
    const response =await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)
    const{name, image, price, category, description} = response.data.data;
    setName(name)
    setImage(image)
    setPrice(price)
    setCategory(category)
    setDescription(description)
  }

  useEffect(()=>loadPlant(id),{id})


  return (
    <div>
      <h1>Update Plant {id}</h1>
      <form className='form'>
            <input 
                type='text'
                placeholder='Add Plant Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='input-plant'
            />
            <input 
                type='text'
                placeholder='Add Plant Category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='input-plant'
            />
            <input 
                type='number'
                placeholder='Add Plant Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className='input-plant'
            />
            <img src={image} className='img'/>
            <input 
                type='text'
                placeholder='Add Plant url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className='input-plant'
            />
            <input 
                type='text'
                placeholder='Add Plant Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='input-plant'
            />

            <button type='button' className='ad'>Update Plant</button>
        </form>     
    </div>

  )
}

export default UpdatePlant