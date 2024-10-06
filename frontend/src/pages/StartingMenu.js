import React from 'react';
import './styles/Scene2.css';  // Import the Scene2 CSS
import './styles/Bubbles.css';  // Import the Bubbles CSS
import centeredImage from './styles/assets/pace_logo.png';

const StartingMenu = ({ onChoice }) => {
    return (
        <div className="scene2-container">
            {/* Add text */}
            <h1 className="scene2-text">CHANGE OF</h1>
            {/* Additional content can go here */}
            <img src={centeredImage} alt="Centered" className="centered-image" />

            {/* Wrap the button inside a div with class "choices" */}
            <div className="choices">
                <button onClick={() => onChoice("rsBad")}>
                    Start your adventure!
                </button>
            </div>

            {/* Hover button to show pop-up */}
            <button className="open-button">
                !
            </button>

            {/* Pop-up box to be shown on hover */}
            <div className="popup-box" style={{ width: '50vw'}}>
                <p>Burkholder, J. B., et al. (2022). Investigation of ozone trends in the stratosphere and their drivers. *Atmospheric Chemistry and Physics, 22*(1549), 1549-1566. https://acp.copernicus.org/articles/22/1549/2022/

Intergovernmental Panel on Climate Change (IPCC). (2021). *Climate change 2021: The physical science basis*. Cambridge University Press.

NASA Earth Observatory. (n.d.). *Phytoplankton*. Earth Observatory. https://earthobservatory.nasa.gov/features/Phytoplankton

NASA. (n.d.). *Ocean color*. OceanColor. https://oceancolor.gsfc.nasa.gov/

NASA. (n.d.). *Phytopia: Exploration of the ocean*. PACE Oceans. https://pace.oceansciences.org/phytopia.htm

National Oceanic and Atmospheric Administration (NOAA). (2018). *NOAA Phytoplankton Field Guide* (NOAA Technical Report NOS CO-OPS 088). NOAA Central Library. https://repository.library.noaa.gov/view/noaa/28832/noaa_28832_DS1.pdf

Princeton University. (2015). *Effects of ocean acidification on marine phytoplankton*. Carbon Mitigation Initiative Annual Report 2015. https://cmi.princeton.edu/annual-meetings/annual-reports/year-2015/effects-of-ocean-acidification-on-marine-phytoplankton/

Solomon, S., et al. (2019). Ozone depletion and climate change. *Nature Geoscience, 12*(8), 589-594. https://doi.org/10.1038/s41561-019-0383-1

UNEP Ozone Secretariat. (2023). *Ozone depletion and climate change: Scientific assessment*. United Nations Environment Programme. https://ozone.unep.org</p>
            </div>
        </div>
    );
};

export default StartingMenu;
