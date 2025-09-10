import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import "../styles/AddToCart.css"

const AddToCard = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = () => {
    axios.get("http://localhost:5000/Card")
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // Delete function
  const Delete = (id) => {
    axios.delete(`http://localhost:5000/Card/${id}`)
      .then(() => {
        setProducts(products.filter(item => item.id !== id)) // update UI immediately
        toast.success("product removed successfully")
      })
      .catch((err) => {
        console.log(err)
        toast.error("product not found")
      })
  }

  return (
    <div>
      <h1 style={{ color: "white" }}>Cart</h1>
      <div className='viewAllProduct'>
        {products.map((data) => (
          <div className='card' key={data.id}>
            <div className='img'>
              <img src={data.pictures} alt="" />
            </div>
            <div className='details'>
              <div className='discribtion'>
             <Link state={data} to={`/User-Homepage/UserViewProduct/${data.id}`}>
                               <h3>{data.categories} || {data.brand}</h3>
                             </Link>
              </div>
              <span>M.R.P: <strike>{data.price}</strike></span><br />
              <span>Offer :15% <b>{data.price - (data.price * 15 / 100)}</b> </span><br />
              <button>Stock: {data.stock}</button><br />
              <button onClick={() => Delete(data.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddToCard
