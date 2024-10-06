import React from 'react';
import './styles/RSBad.css'; 
import './styles/Bubbles.css';
import scientistImage from './styles/assets/scientist-1.png'; 
import leftImage from './styles/assets/ocean_color_map_Brazil.png';

const RSBad = ({ onChoice }) => {
    return (
        <div className="rs-bad-container">
            <div className="content-container">
                <div className="image-container">
                    <img src={leftImage} alt="Left" className="left-image" />
                </div>
                <div 
                    className="bubble right bottom shadow" 
                    style={{ width: '20vw', marginBottom: '20vh', marginLeft: '0vw'}}>
                    <p>remote something something</p>
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

export default RSBad;
