import React, { useState, useEffect } from 'react';
import './styles/QuestionSelector.css'; // Ensure to import the bubble styles

const QuestionSelector = ({ onChoice }) => {
    // Define an array of ozone-related questions
    const questions = [
        {
            text: "Hey, wake up! We need your help right now to save the world!",
            options: [
                { label: "Proceed", scene: "OzoneQuestions" }
            ]
        },
        {
            text: "You’ve developed a new air-purifying machine that removes pollutants and increases local oxygen levels. A corporation offers to buy the patent but might misuse it.",
            options: [
                { label: "License responsibly and promote eco-friendly use", scene: "IncreaseOzone" },
                { label: "Sell the patent without restrictions", scene: "DecreaseOzone" }
            ]
        },
        {
            text: "A city council is proposing to expand tree planting initiatives across urban areas.",
            options: [
                { label: "Support and promote the initiative", scene: "IncreaseOzone" },
                { label: "Oppose the plan due to budget concerns", scene: "NoChange" }
            ]
        },
        {
            text: "A chemical company wants to introduce aerosol products with CFCs into the market.",
            options: [
                { label: "Advocate against their introduction", scene: "IncreaseOzone" },
                { label: "Support the company’s new product", scene: "DecreaseOzone" }
            ]
        },
        {
            text: "You are part of a climate summit, and there’s a vote to ban harmful industrial emissions contributing to ozone depletion.",
            options: [
                { label: "Vote in favor of the ban", scene: "IncreaseOzone" },
                { label: "Abstain from voting", scene: "NoChange" }
            ]
        },
        {
            text: "A factory in your town is illegally releasing ozone-depleting substances into the atmosphere.",
            options: [
                { label: "Report the illegal activities and push for regulations", scene: "IncreaseOzone" },
                { label: "Ignore the issue", scene: "DecreaseOzone" }
            ]
        },
        {
            text: "A coastal farm plans to use a new organic farming method that reduces nutrient runoff.",
            options: [
                { label: "Advocate for the use of this method", scene: "DecreasePhytoplankton" },
                { label: "Oppose the change", scene: "NoChange" }
            ]
        },
        {
            text: "A fishery in your area is using unsustainable fishing practices that disturb marine ecosystems.",
            options: [
                { label: "Advocate for sustainable fishing practices", scene: "DecreasePhytoplankton" },
                { label: "Allow the unsustainable practices to continue", scene: "IncreasePhytoplankton" }
            ]
        },
        {
            text: "You’re asked to approve a new sewage treatment plant that would safely treat wastewater before it enters the ocean.",
            options: [
                { label: "Approve the treatment plant", scene: "DecreasePhytoplankton" },
                { label: "Block the plant’s approval for budget reasons", scene: "NoChange" }
            ]
        },
        {
            text: "An energy company wants to install offshore wind turbines, but improperly planned construction could disrupt nutrient flows and damage marine habitats.",
            options: [
                { label: "Push for an environmentally friendly construction plan", scene: "DecreasePhytoplankton" },
                { label: "Approve the original plan without environmental safeguards", scene: "IncreasePhytoplankton" }
            ]
        },
        {
            text: "A local government wants to restore a polluted wetland, which would reduce runoff into the ocean.",
            options: [
                { label: "Support the restoration", scene: "DecreasePhytoplankton" },
                { label: "Oppose the restoration due to land-use concerns", scene: "IncreasePhytoplankton" }
            ]
        },
        {
            text: "A factory is dumping chemicals into a river that flows into the ocean. These chemicals feed harmful algal blooms.",
            options: [
                { label: "Advocate for stricter pollution controls", scene: "DecreasePhytoplankton" },
                { label: "Ignore the issue", scene: "IncreasePhytoplankton" }
            ]
        },
        {
            text: "Your sleeve is on fire, and you are near the ocean.",
            options: [
                { label: "Pat it out manually", scene: "NoChange" },
                { label: "Jump into the ocean", scene: "NoChange" }
            ]
        },
        {
            text: "During an underwater research mission, you discover that dumping old research equipment into the ocean could save money.",
            options: [
                { label: "Advocate for proper disposal on land", scene: "NoChange" },
                { label: "Dump the equipment into the ocean", scene: "NoChange" }
            ]
        },
        {
            text: "While working on a research boat, the boat’s motor catches fire, and you're near a large oil spill.",
            options: [
                { label: "Call for assistance and extinguish the fire safely", scene: "NoChange" },
                { label: "Jump into the ocean and leave the fire", scene: "NoChange" }
            ]
        },
        {
            text: "You’re camping near the ocean with your research team, and your tent blows over in a gust of wind.",
            options: [
                { label: "Secure the tent and rebuild it away from the shore", scene: "NoChange" },
                { label: "Leave the tent where it is", scene: "NoChange" }
            ]
        },
        {
            text: "Your beachside lab’s air conditioning breaks down, and it’s getting too hot. You notice a cool breeze near the ocean.",
            options: [
                { label: "Take a break near the shore to cool off", scene: "NoChange" },
                { label: "Tough it out inside the lab", scene: "NoChange" }
            ]
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomIndex]);
    }, []);

    return (
        <div className="rs-bad-container">
            {currentQuestion && (
                <div className="content-container">
                    <div className="question-container">
                        <p className="question-text">{currentQuestion.text}</p>
                    </div>
                    <div className="choices">
                        {currentQuestion.options.map((option, index) => (
                            <button key={index} onClick={() => onChoice(option.scene)}>
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuestionSelector;
