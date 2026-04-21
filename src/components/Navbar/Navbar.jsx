import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../assets/logo-temp.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo-link">
            <img src={logoImg} alt="Tempest logo" style={{ height: '28px', width: 'auto' }} className="logo-icon" />
          </Link>
        </div>
        
        <div className="navbar-center">
          <Link to="/products" className="nav-link">PRODUCTS</Link>
          <Link to="/company" className="nav-link">COMPANY</Link>
          <Link to="/looking-glass" className="nav-link">LOOKING GLASS</Link>
        </div>

        <div className="navbar-right">
          <button className="user-btn">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <button className="talk-sales-btn">TALK TO SALES</button>
          <div className="region-selector">
            <img src="https://flagcdn.com/w20/us.png" alt="US Flag" className="flag-icon" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '2px'}}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
