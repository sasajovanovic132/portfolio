import React from 'react';
import aboutPhoto from '/Users/sasajovanovic/Documents/Job/portfolio/portfolio/src/Images/demoPhoto.png';
import RenderSmoothImage from '../RenderSmoothImage/RenderSmoothImage';
import Typical from 'react-typical';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="imgAbout">
                <RenderSmoothImage src={aboutPhoto} alt='about-photo' />
            </div>
            <div className="about-info">


                <p className="about-text">
                    <Typical
                        wrapper="b"
                        steps={[1700,
                            'I am full stack software developer, living in Philadelphia PA ,with my wife and daughter. I work on dinamics and responsivness at front and comlexity and statefullness at back. I am a chess player, teacher and tournament organizer.I like green better than blue because great puzzle can keep me up all night...', 1500
                        ]}
                    />


                </p>


            </div>

        </div>


    )
}


export default ImageSection;