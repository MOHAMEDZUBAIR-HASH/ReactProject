import axios from "axios"
import "../styles/UserRegister.css"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
const UserRegister = () => {
       let [user,setUser]=useState({
        name:"",
        phone:"",
        email:"",
        password:""

    })
    function handleUser(e){
        let {value,name}=e.target
        setUser((prvValue)=>({
            
            ...prvValue,

            [name]:value

        }))
    }
    let navigate=useNavigate()
    function add_user(e){
        e.preventDefault()
        axios.post("http://localhost:5000/UserLogin",user)
        .then((res)=>{
            toast.success("register successfull")
          
            navigate("/UserLogin")

            
        }).catch((err)=>{
           toast.error("error plz check the data ")
            console.log(err);
            
        })
    }
  return (
    <div className="UserRegister">
        <h1>user signup</h1>
         <div className='thumbnail'><img src="https://i.pinimg.com/236x/d0/7b/51/d07b51aa1fbd871620c804e602ac2a29.jpg" alt="" /></div>
        <form action="" onSubmit={add_user}>
            <label htmlFor="">name</label>
            <input type="text" placeholder="enter the name" name="name" 
            value={user.name} onChange={handleUser}  />
            <label htmlFor="">phone</label>
            <input type="tel" pattern="[0-9]{10}" placeholder="enter the number"  name="phone" 
            value={user.phone}  onChange={handleUser}  />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="enter your email"  name="email"
             value={user.email}  onChange={handleUser} />
            <label htmlFor="">password</label>
            <input type="password" placeholder="enter your password" name="password" 
            value={user.password} onChange={handleUser}  />
            <button>signup</button>
        </form>
    </div>
  )
}
export default UserRegister
