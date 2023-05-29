import React from 'react';
import './Header.css';
import logo from '../assets/logo.webp'

const Header = () => {
   return (
      <header className="header">
         <div className="logo">
            <img src={logo} alt="Logo" />
         </div>
         <nav className="nav">
            <ul className="nav-links">
               <li className="nav-link">Home</li>
               <li className="nav-link">About</li>
               <li className="nav-link">Services</li>
               <li className="nav-link">Contact</li>
            </ul>
            
         </nav>
      </header>
   );
};

export default Header;
