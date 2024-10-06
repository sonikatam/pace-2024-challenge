import React, { useState, useEffect } from 'react';

const DecreaseOzone = ({ onChoice }) => {
    const [showNextButton, setShowNextButton] = useState(false); // Define showNextButton state

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNextButton(true); // Show the button after a delay
        }, 3000); // Adjust the delay time as needed

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    return (
        <div>
            <h2>Decrease Ozone Level</h2>
            <p>Your action has helped decrease ozone levels.</p>
            {/* You can add more details or actions related to this scenario */}

            {/* Next button */}
            {showNextButton && (
                <button className="next-button" onClick={() => onChoice("PolarizationBad")}>
                    Next
                </button>
            )}
        </div>
    );
};

export default DecreaseOzone;
