import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/AdminNavbar.css"

function AdminNavbar() {
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

      <div className='navlink'>
        <Link to="/Admin-Homepage">Home</Link>
        <Link to="/Admin-Homepage/add-product">Add Product</Link>
        <Link to="/Admin-Homepage/view-allproduct">View All Product</Link>
      </div>
    </div>
  )
}

export default AdminNavbar
