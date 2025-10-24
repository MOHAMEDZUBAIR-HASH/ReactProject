import React from 'react'
import AdminNavbar from './AdminNavbar'
import UserNavbar from './UserNavbar'
import { Routes,Route } from 'react-router-dom'
import UserViewAllProducts from './UserViewAllProducts'
import UserViewProduct from './UserViewProduct'
import AddToCard from './AddToCard'
import Buynow from './Buynow'
import Address from './Address'

const UserHomepage = () => {
  return (
    <div>
       <UserNavbar/>
       <Routes>
          <Route path='/UserViewAllProduct'element={<UserViewAllProducts/>} />
          <Route path="UserViewProduct/:id" element={<UserViewProduct/>}  />
          <Route path='AddToCard' element={<AddToCard/>} />
          <Route path='buynow' element={<Buynow/>}/>
           <Route path="/address/id" element={<Address/>}/>


       </Routes>
     
      
    </div>
  )
}

export default UserHomepage
