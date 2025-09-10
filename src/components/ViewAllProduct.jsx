import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/viewAllProducts.css"
const ViewAllProduct = () => {
  let[products,setProducts]=useState([])
  let [force,setForce]=useState(0)
  useEffect(()=>{
    
    axios.get("http://localhost:5000/products").then((res)=>
      setProducts(res.data)).catch((err)=>{
        throw err
      })
    
  },[force]
  )
  let navicate=useNavigate()

  function updateProduct(id){
    navicate(`/Admin-Homepage/Update-product/${id}`)
  }
  function delete_Product(id)
  {
    axios.delete(`http://localhost:5000/products/${id}`)
    .then((res)=>{
      console.log(res);
      setForce(force+1)
      toast.success("data delete successfully")
      .catch((err)=>{
        console.log(err)
        toast.error("data not found");
        
      })
      
    })
  }
  return (
    <div>
      <h1 style={{color:"white"}} >view Products</h1>
      <div className='viewAllProduct'>
        {products.map((data)=>{
          return(<>
          <div className='card'>
            <div className='img'>
              <img src={data.pictures} alt="" />
            </div>
            <div className='details'>
              <div className='discribtion'>
                <Link state={data} to={`/Admin-Homepage/View-Products/${data.id}`} >
                <h3>{data.brand}||{data.categories}||{data.price} </h3>
                </Link>
              </div>
              <span>M.R.P: <strike>{data.price}</strike></span><br />
              <span>Offer :15%{""}<b>{data.price-data.price*15/100}</b> </span><br/>
               <button >Stock:{data.stock}</button><br />
              <button onClick={()=>{updateProduct(data.id)}} ><MdEdit/> update</button>
              <button onClick={()=>{delete_Product(data.id)}}><RiDeleteBinFill/> Remove</button>
            </div>
          </div>
          </>
          )
        })}
      </div> 
    </div>
  )
}
export default ViewAllProduct
