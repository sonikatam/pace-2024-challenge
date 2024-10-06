import React, { useState } from 'react';
import HomeScreen from './pages/HomeScreen';
import StartingMenu from './pages/StartingMenu';  // The next scene to transition to
import './App.css';  // Import your new CSS for transitions

const App = () => {
    const [currentScene, setCurrentScene] = useState('homeScreen');  // State to track the current scene
    const [fade, setFade] = useState('fade-in');  // State for fade-in/fade-out transitions

    const handleSceneChange = () => {
        setFade('fade-out');  // Trigger fade-out animation
        setTimeout(() => {
            setCurrentScene('startingMenu');  // After fade-out, change to the next scene
            setFade('fade-in');  // Start fade-in animation for new scene
        }, 500);  // 500ms duration for fade-out before switching scenes
    };

    return (
        <div className={`app-container ${fade}`}>
            {currentScene === 'homeScreen' && <HomeScreen onChoice={handleSceneChange} />}
            {currentScene === 'startingMenu' && <StartingMenu />}
        </div>
    );
};

export default App;
