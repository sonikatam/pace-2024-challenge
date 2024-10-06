import React, { useEffect, useRef } from 'react';
//import './IncreaseOzone.css'; // Import the CSS file for styles

const ozoneImages = [
    './pngs/ozone_0.0.png',
    './pngs/ozone_0.1.png',
    './pngs/ozone_1.0.png',
    './pngs/ozone_1.1.png'
];

const IncreaseOzone = () => {
    const containerRef = useRef(null); // Create a reference for the container
    const ozoneRefs = useRef([]); // Ref to hold the ozone image elements

    // Function to create ozone images
    const createOzoneImages = () => {
        const container = containerRef.current;

        // Create and animate ozone image elements
        for (let i = 0; i < 3; i++) {
            const ozoneImage = document.createElement('img');
            ozoneImage.src = ozoneImages[0]; // Start with the first image
            ozoneImage.className = 'ozone-image'; // Apply the class for styling
            ozoneImage.style.position = 'absolute'; // Position them absolutely
            ozoneImage.style.left = `${i * 100}px`; // Set initial position based on index
            ozoneImage.style.top = '50px'; // Adjust the vertical position
            container.appendChild(ozoneImage);
            ozoneRefs.current[i] = ozoneImage; // Store the image reference
        }
    };

    // Function to flip images between the ozone images
    const flipOzoneImages = () => {
        ozoneRefs.current.forEach((ozoneImage) => {
            const randomIndex = Math.floor(Math.random() * ozoneImages.length);
            ozoneImage.src = ozoneImages[randomIndex]; // Change the image source to a random ozone image
        });
    };

    useEffect(() => {
        createOzoneImages(); // Call the function to create ozone images

        // Set an interval to flip the images every 500 milliseconds
        const intervalId = setInterval(flipOzoneImages, 500);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="increase-ozone-container" ref={containerRef}>
            <h2>Increase Ozone Level</h2>
            <p>Your action has contributed to an increase in ozone levels.</p>
        </div>
    );
};

export default IncreaseOzone;