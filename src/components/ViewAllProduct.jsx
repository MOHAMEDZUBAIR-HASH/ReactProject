import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdEdit } from "react-icons/md"
import { RiDeleteBinFill } from "react-icons/ri"
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'



const ViewAllProduct = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  // Function to fetch all products
  const fetchProducts = () => {
    axios.get("http://localhost:5000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // Navigate to update page
  const updateProduct = (id) => {
    navigate(`/Admin-Homepage/Update-product/${id}`)
  }

  // Delete product
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`)
      .then(() => {
        toast.success("Product deleted successfully")
        fetchProducts() // Refetch updated product list
      })
      .catch((err) => {
        console.error(err)
        toast.error("Failed to delete product")
      })
  }

  return (
    <div>
      <h1 style={{ color: "white" }}>View Products</h1>
      <div className='viewAllProduct'>
        {products.map((data) => (
          <div className='card' key={data.id || data._id}>
            <div className='img'>
              <img src={data.pictures} alt={data.name} />
            </div>
            <div className='details'>
              <div className='description'>
                <Link state={data} to={`/Admin-Homepage/View-Products/${data.id}`}>
                  <h3>{data.brand} || {data.categories} || {data.price}</h3>
                </Link>
              </div>
              <span>M.R.P: <strike>{data.price}</strike></span><br />
              <span>Offer 15%: <b>{(data.price * 0.85).toFixed(2)}</b></span><br />
              <button>Stock: {data.stock}</button><br />
              <button onClick={() => updateProduct(data.id)}><MdEdit /> Update</button>
              <button onClick={() => deleteProduct(data.id)}><RiDeleteBinFill /> Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewAllProduct

