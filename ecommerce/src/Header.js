import React from 'react';
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
      <form>
        <input type="text" placeholder="Search products" />
        <button type="submit">Go</button>
      </form>
      <div className="shopping-cart">
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;
