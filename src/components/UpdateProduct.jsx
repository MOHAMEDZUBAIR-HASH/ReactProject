import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateProduct = () => {
     let [products,setProducts]=useState({
    brand:"",categories:"",name:"",price:"",stock:"",pictures:"",})
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
let params=useParams()
console.log(params.id);

useEffect(()=>{
    axios.get(`http://localhost:5000/products/${params.id}`)
    .then((res)=>{
    console.log(res)
    setProducts({
         brand:res.data.brand
         ,categories:res.data.categories
         ,name:res.data.name
         ,price:res.data.price
         ,stock:res.data.stock
         ,pictures:res.data.pictures,

    });
})
},[])
function handleChange(e){
    let{value,name}=e.target
    setProducts((prvState)=>({
        ...prvState,
        [name]:value
    }))

}
function update_product(e){
    e.preventDefault
    axios.put(`http://localhost:5000/products/${params.id}`,products)
    .then((res)=>{
        console.log(res.data)
        toast.success("data update successful")
        ;
        
    }).catch((err)=>{
        console.log(err)
        toast.error("data not found");
        
    })

}



  return (
    <div className='update-product'>
         <h1 style={{color:"white"}}>Update products</h1>
    <form action="" onSubmit={update_product} >
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
        <button variant="danger">Update Product</button>
    </form>


        
      
    </div>
  )
}

export default UpdateProduct
