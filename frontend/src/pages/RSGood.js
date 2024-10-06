import React from 'react';
import './styles/RSGood.css'; 
import './styles/Bubbles.css';
import scientistImage from './styles/assets/scientist-1.png'; 
import leftImage from './styles/assets/ocean_color_map_Indo_Pacific.png';

const RSGood = ({ onChoice }) => {
    return (
        <div className="rs-good-container">
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
        </div>
    );
};

export default RSGood;
