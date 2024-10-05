import React, { useEffect, useState } from 'react';
import axios from 'axios';
import routes from './routes';

const VisualNovel = () => {
    const [sceneId, setSceneId] = useState(null);
    const [error, setError] = useState(null); // To handle any errors

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/story');
                setSceneId(response.data.scenes[0].id); // Start with the first scene
            } catch (error) {
                console.error("Error fetching story:", error);
                setError("There was an error fetching the story. Please try again later.");
            }
        };

        fetchStory();
    }, []);

    const handleChoice = (nextSceneId) => {
        setSceneId(nextSceneId);
    };

    if (error) return <div>{error}</div>; // Display error message if there is one
        // Check if sceneId is null or not
        if (!sceneId) return <div>Loading...</div>;

        // Get the appropriate scene component based on the current scene ID
        const CurrentScene = routes[sceneId];
    
        // Render the current scene and pass the handleChoice function to it
        return (
            <div>
                <CurrentScene onChoice={handleChoice} />
            </div>
        );
    };
    
    export default VisualNovel;
    
