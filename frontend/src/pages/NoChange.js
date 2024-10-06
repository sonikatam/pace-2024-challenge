import React from 'react';
import './styles/NoChange.css'; 
import './styles/Bubbles.css';
import scientistImage from './styles/assets/scientist-1.png'; 

const RSBad = ({ onChoice }) => {
    return (
        <div className="rs-bad-container">
            <div className="content-container">
                <div 
                    className="bubble right bottom shadow" 
                    style={{ width: '20vw', marginBottom: '5vh', marginLeft: '50vw'}}>
                    <p>Your selection resulted in no change.</p>
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
