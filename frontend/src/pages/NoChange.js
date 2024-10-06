import React from 'react';

const NoChange = ({ onChoice }) => {
    return (
        <div className="no-change-container">
            <h1>No Change Scene</h1>
            <p>Details about the no change scenario.</p>

            {/* Button to go back or make a choice */}
            <button onClick={() => onChoice("questionScene")}>Go Back</button>
        </div>
    );
};

export default NoChange;