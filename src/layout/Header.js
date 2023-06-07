import React from 'react';
import './Header.css';
import logo from '../assets/logo.webp'

const Header = () => {
   return (
      <header className="flex justify-center bg-gray-400 py-4">
         <div className="container mx-auto flex items-center">
            <div className="logo">
               <img src={logo} alt="Logo" />
            </div>
            <nav className="nav ml-4">
               <ul className="flex space-x-4">
               <li className="nav-link">Home</li>
               <li className="nav-link">About</li>
               <li className="nav-link">Services</li>
               <li className="nav-link">Contact</li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
