import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to="/Contacto" className="footer-link">
          Contacto
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
