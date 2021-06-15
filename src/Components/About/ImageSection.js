import React from 'react';
import SkillsSection from './SkillsSection';
import aboutPhoto from '../../Images/code.jpg';
import RenderSmoothImage from '../RenderSmoothImage/RenderSmoothImage';
import Typical from 'react-typical';
import Title from './Title';
import './ImageSection.scss';

function ImageSection() {
    return (
        <div className='image-text'>
            <div className="ImageSection">
                <div className="imgAbout">
                    <RenderSmoothImage className='render-smooth' src={aboutPhoto} alt='Coding Image' />
                </div>

                <div className="about-info">
                    <p className="about-text">
                        <Typical
                            wrapper="b"
                            steps={[1.500,
                                'I am full stack software developer, living in Philadelphia PA ,with my wife and daughter. I work on dinamics and responsivness at front and comlexity and statefullness at back. I am a chess player, teacher and tournament organizer.I like green better than blue because great puzzle can keep me up all night...', 1500
                            ]}
                        />
                    </p>
                </div>
            </div>
        </div>

    )
}


export default ImageSection;/*
<RenderSmoothImage src={aboutPhoto} alt='about-photo' height='50%' width='50%' />*/