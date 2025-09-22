import React, { useState } from 'react';
import DotsSlider from '../subcomponents/dots-slider/DotsSlider';
import './WhatWeOffer.css';
import '../universal-components.css';

const WhatWeOffer: React.FC = () => {

    const [slideIndex, setSlideIndex] = useState(1);

    const slides = [
        (
            <>
                <h4 className="highlighted-text">Emotional Support</h4>
                <h4>
                    We provide a safe space<br />
                    to help you process<br />
                    your emotions, find relief <br />
                    from overwhelm, and <br />
                    feel supported <br />
                    through whatever <br />
                    you're going through
                </h4>
            </>
        ),
        (
            <>
                <h4 className="highlighted-text">Relationship Advice</h4>
                <h4>
                    Whether you're recovering <br />
                    from heartbreak, feeling<br />
                    lost or unsure about a<br />
                    relationship, we <br />
                    help you untangle the <br />
                    confusion and reconnect <br />
                    with what you truly need
                </h4>
            </>
        ),
        (
            <>
                <h4 className="highlighted-text">Life Direction</h4>
                <h4>
                    If you feel lost, disconnected, <br />
                    or unsure of what's next, <br />
                    we'll help you gently <br />
                    reconnect with yourself <br />
                    and figure out what <br />
                    the missing piece is <br />
                    in your life
                </h4>
            </>
        )
    ];

    return (
        <div id="what-we-offer-container" className="section-container">
            <div>
                <h2>Services</h2>
                <h4>What can we help you with?</h4>
            </div>
            <div id="services-container">
                <div>
                    <div className="flex-1 mobile-only glass">
                        {slides[slideIndex - 1]}
                    </div>
                    {slides.map((slide, index) => (
                        <div className="flex-1 desktop-only">
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
            <DotsSlider numOptions={3} value={slideIndex} setValue={setSlideIndex}/>
        </div>
    );
};

export default WhatWeOffer;