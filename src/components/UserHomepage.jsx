import React from 'react'
import AdminNavbar from './AdminNavbar'
import UserNavbar from './UserNavbar'
import { Routes,Route } from 'react-router-dom'
import UserViewAllProducts from './UserViewAllProducts'
import UserViewProduct from './UserViewProduct'
import AddToCard from './AddToCard'

const UserHomepage = () => {
  return (
    <div>
       <UserNavbar/>
       <Routes>
          <Route path='/UserViewAllProduct'element={<UserViewAllProducts/>} />
          <Route path="UserViewProduct/:id" element={<UserViewProduct/>}  />
          <Route path='AddToCard' element={<AddToCard/>} />


       </Routes>
     
      
    </div>
  )
}

export default UserHomepage
