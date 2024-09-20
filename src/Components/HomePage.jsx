
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';



const HomePage = () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">DecorVista</div>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Contacts</li>
            <li>Pages</li>
          </ul>
        </nav>
        
        <div className="icons">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <h1>INTERIOR DESIGN AGENCY</h1>
          <p>
            Ut ornare sem in dui lobortis, id bibendum metus efficitur. Donec
            non enim euismod, dignissim risus in, tincidunt mauris.
          </p>
          <button className="info-button">MORE INFO</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;



