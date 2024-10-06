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
                    style={{ width: '20vw', marginBottom: '45vh', marginLeft: '30vw'}}
                    onClick={handleClick}  // Add the click handler to the first bubble
                >
                    <p>Thank goodness you're here!</p>
                </div>
            )}

            {bubbleState === 1 && (
                <div 
                    className="bubble right bottom shadow" 
                    style={{ width: '20vw', marginBottom: '45vh', marginLeft: '30vw'}}
                    onClick={handleClick}  // Add the click handler to the second bubble
                >
                    <p>I have something important to tell you!</p>
                </div>
            )}

            {bubbleState === 2 && (
                <div 
                    className="bubble right bottom shadow" 
                    style={{ width: '20vw', marginBottom: '45vh', marginLeft: '30vw'}}
                    onClick={handleClick}  // Add the click handler to the third bubble
                >
                    <p>Here is the situation:</p>
                </div>
            )}

            <img src={scientist} alt="a very cool scientist" className="bottom-right-image" />
        </div>
    );
};

export default HomeScreen;
