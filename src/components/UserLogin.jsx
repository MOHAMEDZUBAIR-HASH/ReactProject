import "../styles/UserLogin.css"
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'  
import { useState, useEffect } from 'react'


const UserLogin = () => {

  let [username,setUsername]=useState("")
  let[password,setPassword]=useState("")
  let [users,setUser]=useState([])
  let navicate=useNavigate()
  useEffect((e)=>{
    axios("http://localhost:5000/UserLogin")
    .then((res)=>{
      setUser(res.data)

    })
    .catch((err)=>{
      throw err
    })
  })
  let temp=users.filter((user)=>{
    return user.email===username&&user.password===password
  })
  function validate_admin(e)
  {
    e.preventDefault()
    if(users.length>0)
    {
      toast.success("login successfull")
      navicate("/User-Homepage")
    }
    else{
      toast.error("login failed")
    }
  
  }
  return (
    <div className='UserLogin'>
      <h1>user login</h1>
      <div className="thumbnail"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRimd2A0k8Hnl6y8hgVR-zPOK_3NdojxTk3w&s" alt="" /></div>
      <form>
        <label>
          username
        </label>
        <input type="text" value={username}
         onChange={(e)=>{
         setUsername(  e.target.value)

        }}/>
        <label htmlFor=""> password</label>
        <input type="password" value={password}
         onChange={(e)=>{
         setPassword( e.target.value)

        }}/>
        <button onClick={validate_admin}>Login</button>
        <span>
          new user? <Link to="/User-register" >signup</Link>
        </span>
      </form> 
    </div>
  )
}

export default UserLogin

