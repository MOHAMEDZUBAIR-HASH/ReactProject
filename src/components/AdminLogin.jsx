
import { Link, useNavigate } from 'react-router-dom'
import "../styles/AdminLogin.css"
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'


const AdminLogin = () => {

  let [username,setUsername]=useState("")
  let[password,setPassword]=useState("")
  let [admins,setAdmin]=useState([])
  let navigate=useNavigate()
    useEffect(()=>{
      axios.get("http://localhost:5000/AdminLogin")
      .then((res)=>{
        console.log(res.data);
        setAdmin(res.data)
        
      }).catch(err=>{
        throw err
      },)
    },[])
    let temp=admins.filter((admin)=>{
      return admin.email===username&&admin.password===password
    })
    console.log(temp);
  function validate_admin(e){
    e.preventDefault()
    if(temp.length>0)
    {
      toast.success("login successfull")
      navigate("/Admin-Homepage")
    }
    else{
      toast.error("login failed")
    }
  }
  return (
    <div className='AdminLogin'>
      <h1>admin login</h1>
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
          new user? <Link to="/Admin-Register" >Register</Link>
        </span>
      </form> 
    </div>
  )
}

export default AdminLogin
