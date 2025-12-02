import React from 'react';
import './AboutUs.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-card">
                    <div className="about-header">
                        <h2 className="section-title">Our Story</h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="about-content">
                        <div className="about-text-block">
                            <p className="lead-text">
                                Founded by <strong>Dr. Nizamkar Chandra Sekhar</strong> (Ph.D. Mechanical Engineering, 27+ years R&D expertise) along with co-founders <strong>Shri. Jamalpur Sanjay Raj</strong> and <strong>Shri. Jamalpur Pavan Raj</strong>, and directors <strong>Smt. Palangthod Anita</strong>, <strong>Smt. Jamalpur Reshmitha Raj</strong>, <strong>Smt. Jamalpur Neelima</strong> and <strong>Shri. Jamalpur Shlok Raj</strong>, Arekatika Meat Udyog Ltd is transforming the unorganized Indian meat sector.
                            </p>
                        </div>

                        <div className="about-grid">
                            <div className="info-card">
                                <h3>Establishment</h3>
                                <p>Registered on 18th August 2025, leveraging AI-driven quality control and ICAR-NMRI’s P-MART technology.</p>
                            </div>
                            <div className="info-card">
                                <h3>Innovation</h3>
                                <p>AI and ERP-powered hygienic meat processing ensuring clean, safe, and consistent products.</p>
                            </div>
                            <div className="info-card">
                                <h3>Partners</h3>
                                <p>Collaborating with ICAR-NMRI Hyderabad and empowering local farmer cooperatives.</p>
                            </div>
                            <div className="info-card">
                                <h3>Commitment</h3>
                                <p>Dedicated to hygienic meat supply, sustainable sourcing, and community empowerment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;