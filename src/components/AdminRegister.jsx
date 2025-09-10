
import axios from "axios";
import React, { useState } from 'react'
import "../styles/AdminRegister.css"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AdminRegister = () => {
let [admin,setAdmin]=useState({
    name:"",
    phone:"",
    email:"",
    password:""
})

function handleAdmin(e){
    let {value,name}=e.target
    setAdmin((prvValue)=>({
        ...prvValue,
        [name]:value
    }))
    console.log(admin);      
    }
    let navigate=useNavigate()

    function add_admin(e){
        e.preventDefault()
        axios
        .post("http://localhost:5000/AdminLogin",admin).then
        ((res)=>{
           toast.success("signup sucessfull")
           navigate("/AdminLogin")
            
        }).catch((err)=>{
            toast.err("signup failed")
            throw err;
        })
}
  return (
    <div className='AdminRegister'>
        <div className='thumbnail'><img src="https://i.pinimg.com/236x/d0/7b/51/d07b51aa1fbd871620c804e602ac2a29.jpg" alt="" /></div>
        <h1> admin register</h1>
        <form  onSubmit={add_admin} action="">
            <label htmlFor="">name</label>
            <input required type="text" placeholder='enter the name' 
            value={admin.name} name="name" onChange={handleAdmin} />
            <label htmlFor="">phone</label>
            <input  required type="tel" pattern="[o-9] {10}" placeholder='enter phone number'
             value={admin.phone} name="phone"onChange={handleAdmin}   />
            <label htmlFor="">Email</label>
            <input  required type="email" placeholder='enter your email'
            value={admin.email}  name="email"onChange={handleAdmin}   />
            <label htmlFor=""> password</label>
            <input  required type="password" placeholder='enter your password'
            value={admin.password}  name="password"onChange={handleAdmin}  />
            <button> signup</button>
        </form>
    </div>
  )
}
export default AdminRegister
// html form
//create use state variable name with object keyname,
//declare handle change function
//add name ,value ,onchange into input tag,
//implementation on handle change
// implementation on axios
