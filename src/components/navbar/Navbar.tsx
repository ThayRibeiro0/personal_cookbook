import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a 
          href="#" 
          className={`nav-link ${activeItem === 'home' ? 'active' : ''}`}
          onClick={() => setActiveItem('home')}
          >
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li className="nav-item">
          <a 
          href="#" 
          className={`nav-link ${activeItem === 'recipes' ? 'active' : ''}`}
            onClick={() => setActiveItem('recipes')}
          >
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
