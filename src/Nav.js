import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav >
      <h3>logo</h3>

      <ul className="nav-links">
        <Link to='/about' className='nav-style'>
          <li>About</li>
        </Link>
        <Link to='./shop' className='nav-style'>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
