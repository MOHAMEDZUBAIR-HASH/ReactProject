import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <marquee behavior="" direction="">
        <h1 style={{ color: "red", fontSize: "40px", margin: "20px 0" }}>
          Address is Error
        </h1>
      </marquee>

      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBOAydNdZsD1tQryg1e_Yl6nxRnuu6y0lZpg&s" 
        alt="Error" 
        style={{ width: "300px", height: "auto", borderRadius: "10px", margin: "20px 0" }}
      />

      <br />

      <Link to="/">
        <button 
          style={{ 
            padding: "10px 20px", 
            backgroundColor: "blue", 
            color: "white", 
            border: "none", 
            borderRadius: "5px", 
            fontSize: "18px", 
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          Home Page
        </button>
      </Link>
    </div>
  )
}

export default ErrorPage

