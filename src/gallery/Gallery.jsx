import React from 'react';
import './Gallery.css'; // Import the separate CSS file
import img1 from '../assets/image1.jpeg';
import img2 from '../assets/image2.jpeg';
import img3 from '../assets/image3.jpeg';
import img4 from '../assets/image4.jpeg';
import img5 from '../assets/image5.jpeg';
import img6 from '../assets/image6.jpeg';
import img7 from '../assets/image7.jpeg';
import img8 from '../assets/image8.jpeg';
import img9 from '../assets/image9.jpeg';
import img10 from '../assets/image10.jpeg';
import img11 from '../assets/image11.jpeg';

const Gallery = () => {
    // Array of 11 image URLs (placeholders from Unsplash - replace with your own)
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
    ];

    return (
        <div className="gallery-page">
            <h1 className="gallery-title">Our Gallery</h1>
            <div className="gallery-grid">
                {images.map((src, index) => (
                    <div key={index} className="gallery-item" style={{ animationDelay: `${index * 0.1}s` }}>
                        <img src={src} alt={`Gallery Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;