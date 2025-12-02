import React from 'react';
import './Community.css'; // Import the separate CSS file

const Community = () => {
    return (
        <div className="community-page">
            {/* Hero Section with Enhanced Styling */}
            <div className="community-hero">
                <div className="community-overlay">
                    <div className="community-text">
                        <h1>Empowering the Arekatika Community</h1>
                        <p className="intro-text">
                            We are deeply connected to the Arekatika butchers’ heritage and are committed to turning tradition into modern opportunity.
                        </p>
                        <div className="initiatives">
                            <div className="initiative-item">
                                <i className="fas fa-graduation-cap"></i>
                                <h3>Skill Development</h3>
                                <p>Training in modern slaughtering and hygiene practices (with NMRI support).</p>
                            </div>
                            <div className="initiative-item">
                                <i className="fas fa-briefcase"></i>
                                <h3>Employment</h3>
                                <p>Creating sustainable jobs in Hyderabad for the Arekatika community.</p>
                            </div>
                            <div className="initiative-item">
                                <i className="fas fa-handshake"></i>
                                <h3>Equity Ownership</h3>
                                <p>A cooperative model that offers community members ownership in the business.</p>
                            </div>
                        </div>
                        <p className="campaign-text">
                            Our “Arekatika Pride” campaign celebrates this legacy, reduces stigma, and builds a sustainable future for generations.
                        </p>
                        <button className="cta-button">Join the Movement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;