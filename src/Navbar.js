// components/Navbar.js
import React from 'react';
import './Navbar.css'; // You can create a separate CSS file for the Navbar if needed

const Navbar = () => (
  <div className="topnav">
    <a href="#home">Dev@Deakin</a>
    <input type="text" placeholder="Search" />
    <a href="#post">Post</a>
    <a href="#contact">Login</a>
  </div>
);

export default Navbar;
