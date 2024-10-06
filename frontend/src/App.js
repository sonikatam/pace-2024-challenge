import React, { useState } from 'react';
import HomeScreen from './pages/HomeScreen';
import StartingMenu from './pages/StartingMenu';  // The next scene to transition to
import IncreasePhytoplankton from './pages/IncreasePhytoplankton';
import DecreasePhytoplankton from './pages/DecreasePhytoplankton';

const App = () => {
    const [currentScene, setCurrentScene] = useState('homeScreen');  // State to track the current scene

    const handleSceneChange = () => {
        setCurrentScene('startingMenu');  // Change to StartingMenu scene
    };

    const handleStartingScreenChange = () => {
        setCurrentScene('DecreasePhytoplankton');  // Change to Increase Phytoplankton scene
    };

    return (
        <div>
            {currentScene === 'homeScreen' && <HomeScreen onChoice={handleSceneChange} />}

            {currentScene === 'startingMenu' && <StartingMenu />}

            {currentScene === 'IncreasePhytoplankton' && <IncreasePhytoplankton onChoice={handleSceneChange} />}

            {currentScene === 'DecreasePhytoplankton' && <DecreasePhytoplankton onChoice={handleSceneChange} />}
        </div>
    );
};

export default App;