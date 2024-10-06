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
                    style={{ width: '20vw', marginBottom: '-5vh', marginLeft: '10vw', fontSize: '12px'}}>
                    <p>Your selection resulted in an increased amount of phytoplankton in the ocean as seen in the patch near the Brazil region. Oh no!</p>
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
