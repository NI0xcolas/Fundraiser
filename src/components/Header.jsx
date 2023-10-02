import React, { useEffect, useState } from 'react';
import './Header.css';
import logoImage from '../images/hand-line-icon-with-heart-charity-symbol.jpg'; // Importing the logo image

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  const handleScroll = () => {
    setScrollPos(window.scrollY);
    setShowHeader(window.scrollY < scrollPos);
  };

  return (
    <div>
      <div className="top-banner">
        <div className="top-banner-message">
          <span>♥</span> ACT NOW: Your contributions to support relief efforts in (featured disaster at moment) are DOUBLED – Donate Today
        </div>
        <button className="top-banner-button">Login</button>
      </div>
      <header className={`header ${showHeader ? '' : 'hidden'}`}>
        <nav className="navigation">
          <a href="#for-nonprofits">For Nonprofits</a>
          <a href="#for-donors">For Donors</a>
          <a href="#for-partners">For Partners</a>
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
        </nav>
        <a href="/" className="logo-link"> {/* Making the logo image a clickable link */}
          <img src={logoImage} alt="Fundraiser Logo" className="header-logo"/> 
        </a>
        <div className="button-group">
          <button className="nav-button nav-button-1">Accept Donations</button>
          <button className="nav-button nav-button-2">Give Now</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
