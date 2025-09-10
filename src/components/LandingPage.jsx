import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css"
const LandingPage = () => {
  return (
    <div className="LandingPage">
    
      <Link to="/AdminLogin">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVadL4h1ItfOC3rkn3rDRPXccv4jHcHM5ZA&s" alt="" />
        <h1>admin login</h1>
      </Link>
      <Link to="/UserLogin">
      <img src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="" />
        <h1>user login</h1>
      </Link>
    </div>
  );
};

export default LandingPage;

