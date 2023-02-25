import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  // add NavLinks to allow the user to navigate to the 3 pages of the app 
  return (
    <div className="header">
       <NavLink to="/" >All countries</NavLink>
       <NavLink to="/by-region" >By Region</NavLink>
       <NavLink to="/by-name" >By Name</NavLink>
    
    </div>
  );
}
