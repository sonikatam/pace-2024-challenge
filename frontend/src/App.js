import React, { useState } from 'react';
import HomeScreen from './pages/HomeScreen';
import StartingMenu from './pages/StartingMenu'; // The starting menu scene
import RSBad from './pages/RSBad'; // The new scene
import './App.css'; // Import your CSS for transitions

const App = () => {
    const [currentScene, setCurrentScene] = useState('homeScreen'); // State to track the current scene
    const [fade, setFade] = useState('fade-in'); // State for fade-in/fade-out transitions

    const handleSceneChange = (scene) => {
        setFade('fade-out'); // Trigger fade-out animation
        setTimeout(() => {
            setCurrentScene(scene); // Change to the new scene based on the passed parameter
            setFade('fade-in'); // Start fade-in animation for the new scene
        }, 500); // 500ms duration for fade-out before switching scenes
    };

    return (
        <div className={`app-container ${fade}`}>
            {currentScene === 'homeScreen' && <HomeScreen onChoice={() => handleSceneChange('startingMenu')} />}
            {currentScene === 'startingMenu' && <StartingMenu onChoice={() => handleSceneChange('rsBad')} />}
            {currentScene === 'rsBad' && <RSBad />}
        </div>
    );
};

export default App;
