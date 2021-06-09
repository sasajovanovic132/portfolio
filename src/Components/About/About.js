
import './About.scss';
import React from 'react';
import Title from './Title';
import ImageSection from './ImageSection';




function About() {
    return (
        <div className="About">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />

        </div>
    )
}
export default About;