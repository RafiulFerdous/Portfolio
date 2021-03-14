import React from "react";
import {BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
     
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">
    
  <a className="navbar-brand" href="#"><img className="logo" /*src={logo}*/ alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/service">Services</Link>
      </li>


      

      
    </ul>
    
  </div>
  </div>
</nav>



       
        
          
          




    )
}

export default Navbar;