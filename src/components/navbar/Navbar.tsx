import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Recipes
          </a>
        </li>
        <li className="nav-item">
          <img src="./cooking.png" alt="cookingtime" width={50} height={50} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
