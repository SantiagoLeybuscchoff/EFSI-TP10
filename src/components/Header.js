import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHome, FaPeopleCarry, FaPencilRuler } from 'react-icons/fa';

const Header = () => {
  const favsLocalStorage = localStorage.getItem('favoritos');
  const favoritos = JSON.parse(favsLocalStorage);
  return (
    <header style={{ height: '80px' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginTop: '-10' }}>
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FaHome style={{ fontSize: '40px', marginRight: '25px' }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Info" className="nav-link">
                <FaPeopleCarry style={{ fontSize: '40px', marginRight: '25px' }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/MisCreaciones" className="nav-link">
                <FaPencilRuler style={{ fontSize: '40px', marginRight: '25px' }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Favoritos" className="nav-link">
                <div style={{ position: 'relative' }}>
                  <FaStar style={{ fontSize: '40px' }} />
                  {favoritos.length > 0 && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-20px',
                        right: '-10px',
                        backgroundColor: 'blue',
                        borderRadius: '50%',
                        padding: '3px 8px',
                        color: 'white',
                      }}
                    >
                      {favoritos.length}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
