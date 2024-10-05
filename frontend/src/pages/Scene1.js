import React from 'react';

const Scene1 = ({ onChoice }) => {
    return (
        <div>
            <p>You wake up in a dark room. What do you do?</p>
            <button onClick={() => onChoice("scene2")}>Turn on the light.</button>
            <button onClick={() => onChoice("scene3")}>Leave the room.</button>
        </div>
    );
};

export default Scene1;