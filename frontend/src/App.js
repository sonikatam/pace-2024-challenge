import React, { useState } from 'react';
import HomeScreen from './pages/HomeScreen';
import StartingMenu from './pages/StartingMenu';  // The next scene to transition to

const App = () => {
    const [currentScene, setCurrentScene] = useState('homeScreen');  // State to track the current scene

    const handleSceneChange = () => {
        setCurrentScene('startingMenu');  // Change to StartingMenu scene
    };

    return (
        <div>
            {currentScene === 'homeScreen' && <HomeScreen onChoice={handleSceneChange} />}
            {currentScene === 'startingMenu' && <StartingMenu />}
        </div>
    );
};

export default App;
