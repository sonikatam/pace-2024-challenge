import React from 'react';
import './styles/Scene1.css'
import './styles/Bubbles.css'; // Import the new bubbles CSS
import scientist from './styles/assets/scientist-1.png';

const Scene1 = ({ onChoice }) => {
    return (
        <div className="scene1-container">
            {/* Speech bubble */}
            <div className="bubble right bottom shadow" style={{ width: '500px', marginBottom: '40px', marginLeft: '50px'}}>
                <p>Thank goodness you're here!</p>
            </div>
            <img src={scientist} alt="A scenic view of a mountain" className="bottom-right-image" />
        </div>
    );
};

export default Scene1;
