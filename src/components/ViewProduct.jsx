import React from 'react'
import { useLocation } from 'react-router-dom'
import "../styles/ViewProduct.css"

export default function ViewProduct() {
    let location=useLocation()
    let product=location.state
  return (
    <div className='viewProduct'>
        <div className='thumbnail'>
            <img src={product.pictures} alt="" />
        </div>
        <div className='details'>
          <h1>
            {product.name}||{product.brand}||{product.categories}
          </h1>
          <strike>
            MRP :{product.price}
          </strike>
          <b>Offer Price : {product.price-(product.price*15)/100}</b>
          <b>Stock : <big>{product.stock}</big> </b>
          <button className='buy'> buy</button>
          <button className='add to card'> Add to cart</button>

        </div>
      

      
    </div>
  )
}
