import React from 'react';

const Scene3 = ({ onChoice }) => {
    return (
        <div>
            <p>You step outside and find yourself in a garden. It's beautiful!</p>
            <button onClick={() => onChoice("scene5")}>Explore the garden.</button>
            <button onClick={() => onChoice("scene1")}>Go back inside.</button>
        </div>
    );
};

export default Scene3;
