import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Logo from './Assets/logo.png';
import './header.css';
import '../../App.css';

const Headers = ({ user, handleShowLogin, handleShowSignup, handleLogout, cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo">
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={Logo} alt="Logo" />
        </NavLink>
        <h6>The Shoe Spot</h6>
      </div>
      <nav className={`links ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>About</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>
              Cart <FontAwesomeIcon icon={faShoppingBag} size="lg" />
              {cartItemCount > 0 && <span className="badge bg-primary badge-sm">{cartItemCount}</span>}
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/checkout" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>Checkout</NavLink>
          </li> */}
        </ul>
      </nav>

      <div className="auth-buttons">
        {!user && (
          <>
            <button className="custom-button me-2" onClick={handleShowLogin}>Login</button>
            <button className="custom-button-secondary" onClick={handleShowSignup}>Signup</button>
          </>
        )}
        {user && (
          <button className="custom-button me-2" onClick={handleLogout}>Logout</button>
        )}
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? '×' : '☰'}
      </button>
    </header>
  );
}

export default Headers;