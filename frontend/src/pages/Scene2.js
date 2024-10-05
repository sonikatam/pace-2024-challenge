import React from 'react';

const Scene2 = ({ onChoice }) => {
    return (
        <div>
            <p>The light flickers on, revealing a hidden door. Do you open it?</p>
            <button onClick={() => onChoice("scene4")}>Yes, open the door.</button>
            <button onClick={() => onChoice("scene1")}>No, stay in the room.</button>
        </div>
    );
};

export default Scene2;
