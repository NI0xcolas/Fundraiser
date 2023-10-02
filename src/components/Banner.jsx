import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom'; 

function Banner() {
  return (
    <div className="banner-container">
      <div className="stats-container">
        <div className="stats-item">
          <p className="stats-number">$00.00</p>
          <p>Total Impact</p>
        </div>
        <div className="stats-item">
          <p className="stats-number">0</p>
          <p>Total Orgs Onboarded</p>
        </div>
        <div className="stats-item">
          <p className="stats-number">0+</p>
          <p>Regions Impacted</p>
        </div>
        <div className="stats-item">
          <p className="stats-number">0</p>
          <p># of Donors</p>
        </div>
      </div>
      
      <div className="banner-content">
        <div className="banner-box banner-box-green">
          <h2><Link to="/discover-and-impact">Discover and Impact</Link></h2>
          <div className="banner-text">
            <p>Tap into the fastest growing donor demographic and start accepting Bitcoin, Ethereum, and other cryptocurrencies with automatic conversion to US Dollars and marketing support.</p>
          </div>
          <button className="banner-button banner-button-black">
              <Link to="/discover-and-impact" style={{ color: 'inherit', textDecoration: 'none' }}>Accept Crypto</Link>
          </button>
        </div>
        <div className="banner-box banner-box-blue">
          <h2>Onboard Your Non-Profit</h2>
          <div className="banner-text">
            <p>Donate Bitcoin, Ethereum, and other cryptocurrencies to nonprofits, charities, schools, faith-based organizations, and more and reduce tax-gain burdens.</p>
          </div>
          <button className="banner-button banner-button-white">Give Now</button>
        </div>
      </div>

      <div className="trace-container">
        <p className="trace-title">Trace Your Donation</p>
        <p className="trace-text">
            Experience the future of philanthropy with transparent donations
        </p>
        <input type="text" className="trace-search-bar" placeholder="Enter transaction ID or wallet address" />
      </div>
    </div>
  );
}

export default Banner;
