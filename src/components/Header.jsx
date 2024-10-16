import React from 'react';
import './css/Header.css';  // Importando arquivo de CSS separado para facilitar

const Header = () => {
  return (
    <header className='header-container'>
        <div className='container'>  
            <div className="header-logo">
                <img src="src/img/logocyber.svg" alt="CyberSensei Logo" className="logo" />
            </div>
            <nav className="header-nav">
                <ul className="nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#quemsomos">Quem Somos</a></li>
                <li><a href="#solucoes">Soluções</a></li>
                <li><a href="#faq">FAQ</a></li>
                </ul>
            </nav>
            <div className="header-login">
                <a href="#login" className="login-button">
                Login
                <img src="src/img/bxl-whatsapp.svg" alt="WhatsApp" className="whatsapp-icon" />
                </a>
            </div>
        </div>
    </header>
  );
};

export default Header;
