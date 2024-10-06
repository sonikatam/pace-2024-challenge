import React, { useState, useEffect } from 'react';

const IncreaseOzone = ({ onChoice }) => {
    const [showNextButton, setShowNextButton] = useState(false); // State to show the next button

    // Use effect to show the next button after a certain time (example: 6 seconds)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNextButton(true);
        }, 6000); // Adjust this timing as needed

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div>
            <h2>Increase Ozone Level</h2>
            <p>Your action has helped increase ozone levels.</p>
            {/* You can add more details or actions related to this scenario */}

            {/* Next button */}
            {showNextButton && (
                <button className="next-button" onClick={() => onChoice("PolarizationGood")}>
                    Next
                </button>
            )}
        </div>
    );
};

export default IncreaseOzone;
