import React from 'react';
import './styles/PolarizationBad.css'; 
import './styles/Bubbles.css';
import scientistImage from './styles/assets/scientist-1.png'; 
import topImage from './styles/assets/china close.png'; 
import leftImage from './styles/assets/china far.png';

const PolarizationBad = ({ onChoice }) => {
    return (
        <div className="polarization-bad-container">
            <div className="content-container">
                <div className="image-container">
                    <img src={topImage} alt="Top" className="top-image" />
                    <img src={leftImage} alt="Left" className="left-image" />
                </div>
                <div 
                    className="bubble right bottom shadow" 
                    style={{ width: '20vw', marginBottom: '-5vh', marginLeft: '10vw', fontSize: '12px'}}>
                    <p>Your selection resulted in a decreased amount of ozone in the atmosphere as seen in the patch near China. Oh no!</p>
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

export default PolarizationBad;
