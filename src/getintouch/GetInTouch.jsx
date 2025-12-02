import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
} from "lucide-react";
import "./GetInTouch.css";



export default function GetInTouch() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const [messageCharCount, setMessageCharCount] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "message") {
            setMessageCharCount(value.length);
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessageCharCount(0);
    };

    return (
        <section className="get-in-touch-section" id="contactus">
            <div className="header">
                <h2>
                    Get In <span className="highlight">Touch</span>
                </h2>

            </div>

            <div className="content-grid">
                {/* Contact Information */}
                <div className="contact-info card">
                    <h3>Contact Information</h3>


                    <div className="info-item">
                        <div className="icon-bg">
                            <MapPin size={20} color="#fff" />
                        </div>
                        <div>
                            <h4>Address</h4>
                            <address className="info-desc">
                                Arekatika Meat Udyog Ltd, 4-6-238/A, Esamia Bazar, Koti, Hyderabad - 500027,
                            </address>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon-bg">
                            <Phone size={20} color="#fff" />
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <a href="tel:+918555841414" className="info-desc" >+91-9603331555</a>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon-bg">
                            <Mail size={20} color="#fff" />
                        </div>
                        <div>
                            <h4>Email</h4>
                            <a href="https://mail.google.com/" target="_blank" className="info-desc">care@arekatikameat.com</a>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon-bg">
                            <Clock size={20} color="#fff" />
                        </div>
                        <div>
                            <h4>Business Hours</h4>
                            <p className="info-desc">Mon - Sat: 9:00 AM – 6:00 PM IST</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="contact-form card" onSubmit={handleSubmit}>
                    <h3>Send Us a Message</h3>

                    <div className="input-row">
                        <div className="input-group">
                            <label htmlFor="fullName">
                                Full Name <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                autoComplete="name"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">
                                Email Address <span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                autoComplete="email"
                            />
                        </div>
                    </div>
                    <div className="input-group full-width">
                        <label htmlFor="message">
                            Message <span className="required">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            maxLength={500}
                            placeholder="Elaborate your requirement?(Optional)"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <div className="char-count">{messageCharCount}/500</div>
                    </div>

                    <button type="submit" className="btn-submit">
                        Send Message &nbsp;<Send size={16} />
                    </button>
                </form>
            </div>
        </section>
    );
}
