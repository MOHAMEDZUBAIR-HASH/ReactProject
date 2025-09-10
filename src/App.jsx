import AdminLogin from "./components/AdminLogin";
import LandingPage from "./components/LandingPage";
import UserLogin from "./components/UserLogin";
import AdminRegister from "./components/AdminRegister";
import UserRegister from "./components/UserRegister";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminHomepage from "./components/AdminHomepage";
import UserHomepage from "./components/UserHomepage";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
    <>
        <Routes>
      <Route path="/*" element={<ErrorPage/>}/>    
      <Route path="/" element={<LandingPage />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/UserLogin" element={<UserLogin />} />
      <Route path="/Admin-Register" element={<AdminRegister />} />
      <Route path="/User-Register" element={<UserRegister />} />
      <Route path="/Admin-Homepage/*" element={<AdminHomepage />} />
      <Route path="/User-Homepage/*" element={<UserHomepage />} />
    </Routes>
    <ToastContainer/>
    </>

  );
}
export default App;
    
