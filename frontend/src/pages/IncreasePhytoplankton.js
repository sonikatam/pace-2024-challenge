import React, { useState, useEffect } from 'react';
import small_algae from './styles/assets/algae_smol.png';
import big_algae from './styles/assets/algeo_big_boi.png';
import ocean from './styles/assets/ocean_bg.png';
import './styles/Bubbles.css';
import './styles/IncreasePhytoplankton.css';

const IncreasePhytoplankton = ({ onChoice }) => {
    const [showBigAlgae, setShowBigAlgae] = useState(false); // State to toggle between small and big algae
    const [showNextButton, setShowNextButton] = useState(false); // State to show the next button

    useEffect(() => {
        // Set a timer to change from small algae to big algae after 10 seconds
        const timer = setTimeout(() => {
            setShowBigAlgae(true);
        }, 8000);

        // Set a timer to show the next button 1 second after the big algae appears
        const nextButtonTimer = setTimeout(() => {
            setShowNextButton(true);
        }, 10000);

        return () => {
            clearTimeout(timer);
            clearTimeout(nextButtonTimer);
        };
    }, []);

    return (
        <div className="algae-container">
            <h1 className="title">Welcome to the Increase Phytoplankton Page</h1>
            <p>Observe the changes in algae size!</p>

            {/* Small algae images */}
            {!showBigAlgae && (
                <>
                    <img
                        src={small_algae}
                        alt="small algae 1"
                        className="increase small-algae bottom-left-image"
                        style={{ width: '100px' }}
                    />
                    <img
                        src={small_algae}
                        alt="small algae 2"
                        className="increase small-algae bottom-right-image"
                        style={{ width: '100px' }}
                    />
                    <img
                        src={small_algae}
                        alt="small algae 3"
                        className="increase small-algae middle-image"
                        style={{ width: '100px' }}
                    />
                </>
            )}

            {/* Big algae image */}
            {showBigAlgae && (
                <img
                    src={big_algae}
                    alt="big algae"
                    className={`big-algae ${showBigAlgae ? 'visible' : ''}`} // Add visible class based on state
                />
            )}

            {/* Next button */}
            {showNextButton && (
                <button className="next-button" onClick={() => onChoice("RSBad")}>
                    Next
                </button>
            )}
        </div>
    );
};

export default IncreasePhytoplankton;
