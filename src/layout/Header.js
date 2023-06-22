import React from 'react';
import './Header.css';
import logo from '../assets/images/logo.webp'

const Header = () => {
   return (
      <header className="flex justify-center py-4 bg-purple-200 bg-opacity-25">
         <div className="container mx-auto flex items-center">
            <div className="logo px-5">
               <img src={logo} alt="Logo" />
            </div>
            <div className='container mx-auto flex justify-end'>
               <nav className="nav ml-4 text-white flex justify-end">
                  <ul className="flex space-x-4">
                  <li className="nav-link">Home</li>
                  <li className="nav-link">About</li>
                  <li className="nav-link">Services</li>
                  <li className="nav-link">Contact</li>
                  </ul>
               </nav>
            </div>
           
         </div>
      </header>
   );
};

export default Header;
