import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo-link">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 16C14 12.6863 16.6863 10 20 10C22.6186 10 24.843 11.6706 25.6888 14H29C31.2091 14 33 15.7909 33 18C33 20.2091 31.2091 22 29 22H14V16Z" fill="#0A0A0A"/>
              <rect x="8" y="14" width="8" height="2" fill="#0A0A0A"/>
              <rect x="4" y="18" width="8" height="2" fill="#0A0A0A"/>
              <rect x="10" y="22" width="6" height="2" fill="#0A0A0A"/>
            </svg>
            <span className="logo-text">TEMPEST</span>
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
