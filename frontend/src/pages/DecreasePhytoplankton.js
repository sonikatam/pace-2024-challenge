import React, { useState, useEffect } from 'react';
import small_algae from './styles/assets/algae_smol.png';
import './styles/Bubbles.css';
import './styles/DecreasePhytoplankton.css'; // Ensure to import the CSS

const DecreasePhytoplankton = ({ onChoice }) => {
    const [showNextButton, setShowNextButton] = useState(false); // State to show the next button
    const [visibleAlgae, setVisibleAlgae] = useState([true, true, true, true, true, true]); // State to track visible algae
    const totalAlgae = 6; // Total number of algae

    useEffect(() => {
        const nextButtonTimer = setTimeout(() => {
            setShowNextButton(true);
        }, 6000);

        // Start making algae disappear after 4 seconds of shaking
        const disappearTimer = setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
                if (index < totalAlgae - 2) { // Only make 4 disappear, leaving 2
                    setVisibleAlgae((prev) => {
                        const newVisible = [...prev];
                        newVisible[index] = false; // Set the current algae to not visible
                        return newVisible;
                    });
                    index++;
                } else {
                    clearInterval(interval); // Clear the interval once 4 have disappeared
                }
            }, 1000); // Make one disappear every second
        }, 4000); // Start disappearing after 4 seconds

        return () => {
            clearTimeout(nextButtonTimer);
            clearTimeout(disappearTimer);
        };
    }, []);

    return (
        <div className="algae-container">
            <h1 className="title">Welcome to the Decrease Phytoplankton Page</h1>
            <p>Observe the changes in algae size!</p>

            {/* Individual algae images */}
            {visibleAlgae[0] && (
                <img
                    src={small_algae}
                    alt="small algae 1"
                    className="decrease small-algae alge-one jiggle-horizontal"
                    style={{ width: '100px' }}
                />
            )}
            {visibleAlgae[1] && (
                <img
                    src={small_algae}
                    alt="small algae 2"
                    className="decrease small-algae alge-two jiggle-vertical"
                    style={{ width: '100px' }}
                />
            )}
            {visibleAlgae[2] && (
                <img
                    src={small_algae}
                    alt="small algae 3"
                    className="decrease small-algae alge-three jiggle-horizontal"
                    style={{ width: '100px' }}
                />
            )}
            {visibleAlgae[3] && (
                <img
                    src={small_algae}
                    alt="small algae 4"
                    className="decrease small-algae alge-four jiggle-vertical"
                    style={{ width: '100px' }}
                />
            )}
            {visibleAlgae[4] && (
                <img
                    src={small_algae}
                    alt="small algae 5"
                    className="decrease small-algae alge-five jiggle-horizontal"
                    style={{ width: '100px' }}
                />
            )}
            {visibleAlgae[5] && (
                <img
                    src={small_algae}
                    alt="small algae 6"
                    className="decrease small-algae alge-six jiggle-vertical"
                    style={{ width: '100px' }}
                />
            )}

            {/* Next button */}
            {showNextButton && (
                <button className="next-button" onClick={() => onChoice("RSGood")}>
                    Next
                </button>
            )}
        </div>
    );
};

export default DecreasePhytoplankton;
