import React from 'react'
import "./PlantCard.css"

function PlantCard({_id, name, category, image, price, description}) {
  return (
    <div className='card'>
      <div>
      <div className='plant-card'>
        <h1 className='plant-title'>{name}</h1>
        <p className='plant-price'>Price: {price}</p>
        <img src={image} className='plant-card-img'/>
      </div></div>
    </div>
  )
}

export default PlantCard