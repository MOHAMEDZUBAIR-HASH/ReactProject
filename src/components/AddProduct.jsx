import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import "../styles/AddProducts.css"
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {

let categories=[
  "Electronics",
    "Clothing & Accessories",
    "Shoes",
    "Jewelry & Watches",
    "Health & Beauty",
    "Home & Kitchen",
    "Furniture",
    "Appliances",
    "Groceries",
    "Pet Supplies",
    "Sports & Outdoors",
    "Books",
    "Toys & Games","Mobile phones"
]
let brands=["Apple",
    "Samsung",
    "Sony",
    "LG",
    "Dell",
    "HP",
    "Lenovo",
    "Asus",
    "Nike",
    "Adidas",
    "Puma",
    "Reebok"]
    let [products,setProducts]=useState({
brand:"",categories:"",name:"",price:"",stock:"",pictures:"",})

function handleChange(e){
  let{name,value}=e.target
  setProducts((prvProduct)=>({...prvProduct,[name]:value}))
}
let navigate =useNavigate()
function add_product(e){
  e.preventDefault()
  axios.post("http://localhost:5000/products",products).then((res)=>{
    toast.success("Product Add Successfull")
    navigate("/Admin-Homepage/view-allproduct")
  }
).catch((err)=>{
  toast.error("Product Add Falied"+err.message)
})

}
  return (
    <>
    <h1 style={{color:"white"}}>add products</h1>
    <form action="" onSubmit={add_product} >
      <label htmlFor=""> Brand :</label>
      <select required name="brand" onChange={handleChange} value={products.brand}>
        <option value="" disabled selected>select the brands</option>
        {
          brands.map((item)=>{
            return(
              <>
              <option>{item}</option>
              </>
            )   
          })
        }
       </select>
       <select required  name="categories" onChange={handleChange} value={products.categories}>
        <option value="" disabled selected> select cetegories</option>
        {
          categories.map((item)=>{
            return(
              <>
              <option >{item}</option>
              </>
            )
          })
        }
       </select>
        <input required onChange={handleChange} value={products.name} name="name" placeholder='enter the product name' type="text" />
        <input required onChange={handleChange} value={products.price} name="price" placeholder='enter the price' type="number" />
        <input required onChange={handleChange} value={products.stock }name="stock" placeholder='enter the quantity' type="number" />
        <input required onChange={handleChange} value={products.pictures }name="pictures" placeholder='enter the product image_URL' type="text" />
        <button variant="danger">Register Product</button>
    </form>
    </>
  )
}
export default AddProduct
