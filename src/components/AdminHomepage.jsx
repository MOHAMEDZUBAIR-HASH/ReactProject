import { Link } from "react-router-dom"
import AdminNavbar from "./AdminNavbar"
import { Route,Routes } from "react-router-dom"
import AddProduct from "./AddProduct"
import ViewAllProduct from "./ViewAllProduct"
import ViewProduct from "./ViewProduct"
import UpdateProduct from "./UpdateProduct"


const AdminHomepage = () => {
  return (
    <div className="AdminHomepage">

      <AdminNavbar/>
     
      <Routes>
       
        <Route path="/add-product" element={<AddProduct/>}/>
        <Route path="/view-allproduct" element={<ViewAllProduct/>}></Route>
         <Route path="/View-Products/:id"  element={<ViewProduct/>} />
         <Route path="/Update-product/:id" element={<UpdateProduct/>}/>

      </Routes>
      

       
      
    </div>
  )
}

export default AdminHomepage

