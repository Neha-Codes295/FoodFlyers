import React, { useRef } from 'react';
import './Header.css';

const Header = ({ scrollToMenu }) => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes</p>
        <button >View Menu</button>
      </div>
    </div>
  );
};

export default Header;
