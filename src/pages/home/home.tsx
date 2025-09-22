import React from 'react';
import './home.css'
import Hero from '../../components/hero/hero';
import WhatWeOffer from '../../components/what-we-offer/WhatWeOffer';
import Guarantees from '../../components/guarantees/guarantees';
import Testimonials from '../../components/testimonials/testimonials';
import Footer from '../../components/footer/footer';

const Home: React.FC = () => {
    return (
        <div id="home-container">
            <img id="background-image" src={`${import.meta.env.BASE_URL}images/logo.png`} alt="" />
            <Hero />
            <WhatWeOffer />
            <Guarantees />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;