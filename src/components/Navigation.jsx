
import React from "react";
import "../App.css";

const Navigation = () =>{
return(
    <nav className="container">
<div className="logo">
    <img src="/images/brand.png" alt=" logo" />
   </div>
   <ul>
    <li href="#">menu</li>
    <li href="#">Location</li>
    <li href="#">About</li>
    <li href="#">Contact</li>
   </ul>

   <button>login</button>
   </nav>
);
};
export default Navigation;