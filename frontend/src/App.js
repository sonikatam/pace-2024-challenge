import React, { useState } from 'react';
import HomeScreen from './pages/HomeScreen';
import StartingMenu from './pages/StartingMenu'; // The starting menu scene
import IncreasePhytoplankton from './pages/IncreasePhytoplankton';
import DecreasePhytoplankton from './pages/DecreasePhytoplankton';
import IncreaseOzone from './pages/IncreaseOzone';
import DecreaseOzone from './pages/DecreaseOzone';
import NoChange from './pages/NoChange';
import QuestionSelector from './pages/QuestionSelector';
import RSBad from './pages/RSBad';
import RSGood from './pages/RSGood';
import PolarizationBad from './pages/PolarizationBad';
import PolarizationGood from './pages/PolarizationGood';
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
            {currentScene === 'IncreaseOzone' && <IncreaseOzone onChoice={handleQuestionSceneChange} />}
            {currentScene === 'DecreaseOzone' && <DecreaseOzone onChoice={handleQuestionSceneChange} />}
            {currentScene === 'IncreasePhytoplankton' && <IncreasePhytoplankton onChoice={handleQuestionSceneChange} /> }
            {currentScene === 'DecreasePhytoplankton' && <DecreasePhytoplankton onChoice={handleQuestionSceneChange} />}
            {currentScene === 'NoChange' && <NoChange onChoice={handleMoveToQuestionScene} />}
            {currentScene === 'RSBad' && <RSBad onChoice={handleMoveToQuestionScene} />}
            {currentScene === 'RSGood' && <RSGood onChoice={handleMoveToQuestionScene} />}
            {currentScene === 'PolarizationBad' && <PolarizationBad onChoice={handleMoveToQuestionScene} />}
            {currentScene === 'PolarizationGood' && <PolarizationGood onChoice={handleMoveToQuestionScene} />}
        </div>
    );
};

export default App;
