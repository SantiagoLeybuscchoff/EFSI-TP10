import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Info" className="nav-link">Info</Link>
            </li>
            <li className="nav-item">
              <Link to="/MisCreaciones" className="nav-link">Mis Creaciones</Link>
            </li>
            <li className="nav-item">
              <Link to="/Favoritos" className="nav-link">Favoritos</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
