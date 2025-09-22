import React from 'react';
import './hero.css';
import '../universal-components.css'

const Hero: React.FC = () => {
    return (
        <div id="hero-container">
            <div id="hero-text-section" className="section-container" style={{maxWidth: "fit-content"}}>
                <h2 style={{whiteSpace: "nowrap"}}>It's ok to <br /><span className="highlighted-text">feel those feelings...</span></h2>
                <h5 id="hero-subtext">
                    And we are here to help you <br />
                    figure out what is causing those feelings. <br />
                    Let's make the first step together.
                </h5>
                <button id="hero-call-to-action">
                    <h4>Create a free account</h4>
                </button>
            </div>
            <div id="hero-image-container" className="desktop-only">
                <img id="hero-image" src={`${import.meta.env.BASE_URL}images/hero-image.jfif`} alt="Hero image" />
            </div>
        </div>
    );
};

export default Hero;