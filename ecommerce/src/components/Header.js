import React from 'react';
import './Header.css'
import Cart from './Cart';

const Header = () => {
  return (
    <header>
      <h1>Juice</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
        <div className="shopping-cart">
        <Cart/>
      </div>
    </header>
  );
};

export default Header;
