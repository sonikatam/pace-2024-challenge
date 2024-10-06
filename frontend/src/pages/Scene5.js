import React from 'react';

const Scene5 = ({ onChoice }) => {
    return (
        <div>
            <p>You see a strange figure in the garden. What do you do?</p>
            <button onClick={() => onChoice("scene6")}>Approach the figure.</button>
            <button onClick={() => onChoice("scene1")}>Run away.</button>
        </div>
    );
};

export default Scene5;


