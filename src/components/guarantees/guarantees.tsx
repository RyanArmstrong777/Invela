import React from 'react';
import './guarantees.css';
import '../universal-components.css'
import { BookLock, HandHeart, UserRoundSearch, Gauge, HeartHandshake, ShieldCheck } from 'lucide-react';

const Guarantees: React.FC = () => {

    const gridItems = [
        (
            <>
                <BookLock />
                <h5>Client Confidentiality</h5>
            </>
        ),
        (
            <>
                <HandHeart />
                <h5>Judgement-free Support</h5>
            </>
        ),
        (
            <>
                <UserRoundSearch />
                <h5>Personalised Guidance</h5>
            </>
        ),
        (
            <>
                <Gauge />
                <h5>Client Defined Pace</h5>
            </>
        ),
        (
            <>
                <HeartHandshake />
                <h5>Zero Pressure</h5>
            </>
        ),
        (
            <>
                <ShieldCheck />
                <h5>Proven Strategies</h5>
            </>
        )
    ];

    return (
        <div id="guarantees-container" className="section-container">
            <h2>Guarantees</h2>
            <h4 id="hero-subtitles">What can you expect from us?</h4>
            <div className="grid">
                {gridItems.map((item, index) => (
                    <div className="grid-item glass">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Guarantees;