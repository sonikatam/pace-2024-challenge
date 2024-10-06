import React, { useState } from 'react';
import HomeScreen from './pages/HomeScreen';
import StartingMenu from './pages/StartingMenu';  // The next scene to transition to
import IncreasePhytoplankton from './pages/IncreasePhytoplankton';
import DecreasePhytoplankton from './pages/DecreasePhytoplankton';
import IncreaseOzone from './pages/IncreaseOzone';
import DecreaseOzone from './pages/DecreaseOzone';
import NoChange from './pages/NoChange';
import QuestionSelector from './pages/QuestionSelector';

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
            {currentScene === 'homeScreen' && <HomeScreen onChoice={handleSceneChange} />}
            {currentScene === 'startingMenu' && <StartingMenu onChoice={handleMoveToQuestionScene} />}
            {currentScene === 'QuestionSelector' && <QuestionSelector onChoice={handleQuestionSceneChange} />}
            {currentScene === 'IncreaseOzone' && <IncreaseOzone />}
            {currentScene === 'DecreaseOzone' && <DecreaseOzone />}
            {currentScene === 'IncreasePhytoplankton' && <IncreasePhytoplankton />}
            {currentScene === 'DecreasePhytoplankton' && <DecreasePhytoplankton />}
            {currentScene === 'NoChange' && <NoChange />}
        </div>
    );
};

export default App;
