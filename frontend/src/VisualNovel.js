import React, { useEffect, useState } from 'react';
import axios from 'axios';
import routes from './routes'; // Importing your routes for dynamic scenes

const VisualNovel = () => {
    const [sceneId, setSceneId] = useState(null); // Track the current scene ID
    const [error, setError] = useState(null); // To handle any errors

    // Fetch the story's first scene on component mount
    useEffect(() => {
        const fetchStory = async () => {
//            try {
                const response = await axios.get('http://127.0.0.1:5000/api/story');
                setSceneId(response.data.scenes[0].id); // Set the first scene's ID
//            } catch (error) {
//                console.error("Error fetching story:", error);
//                setError("There was an error fetching the story. Please try again later.");
//            }
        };

        fetchStory(); // Trigger the fetch on component mount
    }, []);

    // Handle the user selecting a choice in the scene, which updates the sceneId
    const handleChoice = (nextSceneId) => {
        setSceneId(nextSceneId);
    };

    // Display an error message if the story fetch fails
    if (error) return <div>{error}</div>;

    // Display a loading message if the scene hasn't loaded yet
    if (!sceneId) return <div>Loading...</div>;

    // Dynamically select the scene component based on the current scene ID
    const CurrentScene = routes[sceneId];

    // Render the selected scene, passing the choice handler down as a prop
    return (
        <div className="scene-container">
            <CurrentScene onChoice={handleChoice} />
        </div>
    );
};

export default VisualNovel;