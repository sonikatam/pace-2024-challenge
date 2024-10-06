import React, { useState, useEffect } from 'react';

const PhyloplanktonQuestion = ({ onChoice }) => {
    // Define an array of ozone-related questions
    const questions = [
        {
            text: "You have a bag of spray paint cans, and a group of teenagers ask to buy them off of you in order to graffiti a nearby street.",
            options: [
                { label: "Say no", scene: "NoChange" },
                { label: "Say yes", scene: "DecreaseOzone" }
            ]
        },
        {
            text: "A friend suggests using a product that contains harmful chemicals for cleaning your car. What do you do?",
            options: [
                { label: "Use the product", scene: "DecreaseOzone" },
                { label: "Say no", scene: "NoChange" }
            ]
        },
        {
            text: "You find a stash of old refrigerators that haven't been disposed of properly. Do you report them?",
            options: [
                { label: "Report them to the authorities", scene: "IncreaseOzone" },
                { label: "Ignore them", scene: "DecreaseOzone" }
            ]
        },
        {
            text: "A company offers you a deal to use a product that doesn’t impact ozone levels. Do you accept?",
            options: [
                { label: "Accept the deal", scene: "IncreaseOzone" },
                { label: "Decline the deal", scene: "NoChange" }
            ]
        }
    ];

    // State to store the randomly selected question
    const [currentQuestion, setCurrentQuestion] = useState(null);

    // Select a random question when the component mounts
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomIndex]);
    }, []);

    // Render the component with the random question
    return (
        <div>
            {currentQuestion && (
                <>
                    <p>{currentQuestion.text}</p>
                    {currentQuestion.options.map((option, index) => (
                        <button key={index} onClick={() => onChoice(option.scene)}>
                            {option.label}
                        </button>
                    ))}
                </>
            )}
        </div>
    );
};

export default PhyloplanktonQuestion;