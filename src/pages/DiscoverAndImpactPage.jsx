import React, { useState } from 'react';
import './DiscoverAndImpactPage.css';

function DiscoverAndImpactPage() {
    const [selectedNetwork, setSelectedNetwork] = useState('ethereum');

    const handleNetworkClick = (network) => {
        setSelectedNetwork(network);
    };

    return (
        <div className="create-fund-container">
            <div className="main-content">
                <h1>Start a Fund</h1>
                <p>Creating a Donor-advised Fund will allow you to perform on-chain grants to nonprofits and allocations to Endaoment-approved portfolios.</p>
                <div className="documentation">
                    <a href="#">Documentation</a>
                </div>

                <form>
                    <div className="form-section">
                        <label className="form-label">
                            <span>Fund name</span>
                            <input type="text" className="form-input" placeholder="Name of the new fund" />
                        </label>

                        <label className="form-label">
                            <span>Fund purpose</span>
                            <textarea className="form-textarea" placeholder="Write a short paragraph describing the purpose and goal of this new fund"></textarea>
                        </label>

                        <h2>Tell us about yourself</h2>
                        <p>No personal information is ever stored publicly. We require your information in order to payout received donations.</p>

                        <label className="form-label">
                            <span>First name</span>
                            <input type="text" className="form-input" placeholder="Your first name" />
                        </label>

                        <label className="form-label">
                            <span>Last name</span>
                            <input type="text" className="form-input" placeholder="Your last name" />
                        </label>

                        <label className="form-label">
                            <span>Email</span>
                            <input type="email" className="form-input" placeholder="you@email.com" />
                        </label>

                        <label className="form-label">
                            <span>Address</span>
                            <input type="text" className="form-input" placeholder="Your address" />
                        </label>

                        <label className="form-label">
                            <span>Address Line 2</span>
                            <input type="text" className="form-input" placeholder="Address Line 2" />
                        </label>

                        <label className="form-label">
                            <span>Country</span>
                            <select className="form-select">
                                <option>United States of America</option>
                                {/* Add other countries as needed */}
                            </select>
                        </label>

                        <label className="form-label">
                            <span>City</span>
                            <input type="text" className="form-input" placeholder="Your city" />
                        </label>

                        <label className="form-label">
                            <span>State</span>
                            <select className="form-select">
                                <option>Select a State</option>
                                {/* Add states as needed */}
                            </select>
                        </label>

                        <label className="form-label">
                            <span>Zip Code</span>
                            <input type="text" className="form-input" placeholder="Enter a Zip Code" />
                        </label>

                        <div className="form-section network-select">
                            <p>Select the Network you would like your Fund to be deployed on</p>
                            {selectedNetwork === 'ethereum' ? (
                                <div 
                                    className="network-option ethereum active"
                                    onClick={() => handleNetworkClick('optimism')}
                                >
                                    Ethereum
                                </div>
                            ) : (
                                <div 
                                    className="network-option optimism active"
                                    onClick={() => handleNetworkClick('ethereum')}
                                >
                                    Optimism
                                </div>
                            )}
                        </div>

                        <button type="submit" className="start-fund-btn">Create Fund</button>
                    </div>
                </form>
            </div>

            <div className="cookie-notice">
                This site uses cookies to enhance your experience, especially when interacting with our contracts.
            </div>
        </div>
    );
}

export default DiscoverAndImpactPage;
