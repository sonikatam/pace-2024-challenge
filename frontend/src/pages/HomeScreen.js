import React, { useState } from 'react';
import './styles/Scene1.css';
import './styles/Bubbles.css';  // Import the new bubbles CSS
import scientist from './styles/assets/scientist-1.png';

const HomeScreen = ({ onChoice }) => {
    const [bubbleState, setBubbleState] = useState(0);  // State to track the current bubble

    // Event handler for the click event to change the bubbles or transition to another scene
    const handleClick = () => {
        if (bubbleState < 2) {
            setBubbleState(bubbleState + 1);  // Increment the bubble state
        } else {
            // Call the parent component's function to trigger a scene transition
            onChoice();  // This will transition to the StartingMenu
        }
    };

    return (
        <div className="scene1-container">
            {/* Conditionally render different bubbles based on the bubbleState */}
            {bubbleState === 0 && (
                <div 
                    className="bubble right bottom shadow" 
                    style={{ width: '30vw', marginBottom: '45vh', marginLeft: '20vw'}}
                    onClick={handleClick}  // Add the click handler to the first bubble
                >
                    <p>Thank goodness you're here! I have something important to tell you.</p>
                </div>
            )}

            {bubbleState === 1 && (
                <div 
                    className="bubble right bottom shadow" 
                    style={{ width: '30vw', marginBottom: '45vh', marginLeft: '20vw'}}
                    onClick={handleClick}  
                >
                    <p>Here is the situation, the Earth is dying and we need your help to save it using information from NASA's PACE satellite.</p>
                </div>
            )}

            {bubbleState === 2 && (
                <div 
                    className="bubble right bottom shadow" 
                    style={{ width: '30vw', marginBottom: '45vh', marginLeft: '20vw'}}
                    onClick={handleClick} 
                >
                    <p>Make sure to make the most sustainable choices— the fate of the world is in your hands.</p>
                </div>
            )}

            <img src={scientist} alt="a very cool scientist" className="bottom-right-image" />
        </div>
    );
};

export default HomeScreen;
