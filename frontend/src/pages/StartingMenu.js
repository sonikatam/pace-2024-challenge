import React from 'react';
import './styles/Scene2.css';  // Import the Scene2 CSS
import './styles/Bubbles.css';  // Import the Bubbles CSS
import centeredImage from './styles/assets/pace_logo.png';

const Scene2 = ({ onChoice }) => {
    return (
        <div className="scene2-container">
            {/* Add text */}
            <h1 className="scene2-text">CHANGE OF</h1>
            {/* Additional content can go here */}
            <img src={centeredImage} alt="Centered" className="centered-image" />

            {/* Wrap the button inside a div with class "choices" */}
            <div className="choices">
                <button onClick={() => onChoice()}>
                    Start your adventure!
                </button>
            </div>

            {/* Hover button to show pop-up */}
            <button className="open-button">
                !
            </button>

            {/* Pop-up box to be shown on hover */}
            <div className="popup-box">
                <p>Sources here.</p>
            </div>
        </div>
    );
};

export default Scene2;
