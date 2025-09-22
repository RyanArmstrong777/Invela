import React, { useState } from 'react';
import '../universal-components.css';
import './testimonials.css'
import DotsSlider from '../subcomponents/dots-slider/DotsSlider';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';

const Testimonials: React.FC = () => {

    const [slideIndex, setSlideIndex] = useState(1);

    const names = [
        "Lisa",
        "Marcus",
        "Ben"        
    ]

    const reviews = [
        (
            <h5>
                Should have given this a try years ago. 
                Was recommended to me by a friend who had some similar struggles
                and its given me a much better outlook on my situation
            </h5>
        ),
        (
            <h5>
                Great help, 10/10. These are genuine, caring people.
                I cannot recommend enough.
                Thanks so much guys, I will forever appreciate what you've done for me.
            </h5>
        ),
        (
            <h5>
                The only help I've ever received that I feel I've actually gotten anywhere with.
                Great people, great help. Couldn't say a bad thing about any of it! Thanks :)
            </h5>
        )
    ]

    const dates = [
        "18th Aug. 2025",
        "2nd Sep. 2025",
        "18th Sep. 2025"
    ]

    return (
        <div id="testimonials-container" className="section-container">
            <div>
                <h2>Testimonials</h2>
                <h4>What do our clients say?</h4>
            </div>
            <div id="reviews-container">
                {reviews.map((review, index) => (
                    <div className="glass review-wrapper desktop-only">
                        <h4 style={{opacity: "50%"}}>{names[index]}</h4>
                        {review}
                        <div className="stars-container">
                            <div>
                                {[...Array(5)].map((_) => (
                                    <StarSolid />
                                ))}
                            </div>
                            <h5 style={{opacity: "50%"}}>{dates[index]}</h5>
                        </div>
                    </div>
                ))}
                <div className="glass review-wrapper mobile-only">
                    <h4 style={{opacity: "50%"}}>{names[slideIndex - 1]}</h4>
                    {reviews[slideIndex - 1]}
                    <div className="stars-container">
                        <div>
                            {[...Array(5)].map((_) => (
                                <StarSolid />
                            ))}
                        </div>
                        <h5 style={{opacity: "50%"}}>{dates[slideIndex - 1]}</h5>
                    </div>
                </div>
            </div>
            <DotsSlider numOptions={3} value={slideIndex} setValue={setSlideIndex}/>
        </div>
    );
};

export default Testimonials;