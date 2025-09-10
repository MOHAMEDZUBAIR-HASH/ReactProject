import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/AdminNavbar.css"

const UserNavbar = () => {
  return (
    
        
            <div className='AdminNavbar'>
              <div className='logo'>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7d_w4eZZkQwGtC9TrkgDaSkQ6965Ihmd6Q&s" 
                  alt="logo" 
                />
              </div>
        
              <div className='search'>
                <input type="text" placeholder='Search the product'  />
                <span className="search-icon">🔍</span> 
              </div>
              <div>
                <Link to={"/User-Homepage/AddToCard"} style={{color:"white"}} >  Card</Link>
              </div>
            
              
        
              <div className='navlink'>
                <Link to="/User-Homepage/UserViewAllProduct">View Products</Link>
              </div>
            </div>
      
    
  )
}

export default UserNavbar
