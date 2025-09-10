import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/UserViewProduct.css"

const UserViewAllProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.error("Error fetching products:", err)
      })
  }, [])

  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center", margin: "1rem 0" }}>
        All Products
      </h1>

      <div className='viewProducts'>
        {products.map((data) => (
          <div className='card' key={data.id || data._id}>
            <div className='img'>
              <img src={data.pictures} alt={data.name} />
            </div>
            <div className='details'>
              <div className='description'>
                <Link state={data} to={`/User-Homepage/UserViewProduct/${data.id}`}>
                  <h3>{data.categories} || {data.brand}</h3>
                </Link>
              </div>
              <span>MRP: <strike>{data.price}</strike></span>
              <span>Offer 15%: {data.price - data.price * 0.15}</span>
              <span>Stock: <big>{data.stock}</big></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserViewAllProducts
