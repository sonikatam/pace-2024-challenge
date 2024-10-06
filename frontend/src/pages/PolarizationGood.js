import React from 'react';
import './styles/PolarizationGood.css'; 
import './styles/Bubbles.css';
import scientistImage from './styles/assets/scientist-1.png'; 
import topImage from './styles/assets/africa close.png'; 
import leftImage from './styles/assets/africa far .png';

const PolarizationGood = ({ onChoice }) => {
    return (
        <div className="polarization-good-container">
            <div className="content-container">
                <div className="image-container">
                    <img src={topImage} alt="Top" className="top-image" />
                    <img src={leftImage} alt="Left" className="left-image" />
                </div>
                <div 
                    className="bubble right bottom shadow" 
                    style={{ width: '20vw', marginBottom: '20vh', marginLeft: '0vw'}}>
                    <p>polarization something something</p>
                </div>
            </div>

            {/* Scientist image */}
            <img src={scientistImage} alt="Scientist" className="scientist-image" />

            {/* Choice Button */}
            <div className="choices">
                <button onClick={() => onChoice("questionScene")}>
                    Go to Question Scene
                </button>
            </div>
        </div>
    );
};

export default PolarizationGood;