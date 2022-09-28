import './Header.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ children, location }) {
  return (
    <header className = 'header'>
      <div className={`header__container ${location}`}>
        <Link to='/' className='header__logo'></Link>
        {children}
      </div>
    </header>
  );
}

export default Header;