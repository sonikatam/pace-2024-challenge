import React, { useState } from 'react';
import HomeScreen from './pages/HomeScreen';
import StartingMenu from './pages/StartingMenu'; // The starting menu scene
import RSBad from './pages/RSBad'; // The new scene
import IncreasePhytoplankton from './pages/IncreasePhytoplankton';
import DecreasePhytoplankton from './pages/DecreasePhytoplankton';
import IncreaseOzone from './pages/IncreaseOzone';
import DecreaseOzone from './pages/DecreaseOzone';
import NoChange from './pages/NoChange';
import QuestionSelector from './pages/QuestionSelector';
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

    const handleMoveToQuestionScene = () => {
        setFade('fade-out');  // Trigger fade-out animation
        setTimeout(() => {
            setCurrentScene('QuestionSelector');  // After fade-out, change to the next scene
            setFade('fade-in');  // Start fade-in animation for new scene
        }, 500);  // 500ms duration for fade-out before switching scenes
    };

    const handleQuestionSceneChange = (nextScene) => {
        setFade('fade-out');  // Trigger fade-out animation
        setTimeout(() => {
            setCurrentScene(nextScene);  // Change to the next scene based on the parameter
            setFade('fade-in');  // Start fade-in animation for the new scene
        }, 500);  // 500ms duration for fade-out before switching scenes
    };

    return (
        <div className={`app-container ${fade}`}>
            {currentScene === 'homeScreen' && <HomeScreen onChoice={() => handleSceneChange('startingMenu')} />}
            {currentScene === 'startingMenu' && <StartingMenu onChoice={handleMoveToQuestionScene} />}
            {currentScene === 'QuestionSelector' && <QuestionSelector onChoice={handleQuestionSceneChange} />}
            {currentScene === 'IncreaseOzone' && <IncreaseOzone />}
            {currentScene === 'DecreaseOzone' && <DecreaseOzone />}
            {currentScene === 'IncreasePhytoplankton' && <IncreasePhytoplankton />}
            {currentScene === 'DecreasePhytoplankton' && <DecreasePhytoplankton />}
            {currentScene === 'NoChange' && <NoChange />}
            {currentScene === 'rsBad' && <RSBad />}
        </div>
    );
};

export default App;
