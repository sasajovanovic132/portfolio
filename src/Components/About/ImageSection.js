import React from 'react';
import aboutPhoto from '/Users/sasajovanovic/Documents/Job/portfolio/portfolio/src/Images/demoPhoto.png';
import RenderSmoothImage from '../RenderSmoothImage/RenderSmoothImage';
import Typical from 'react-typical';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="imgAbout">
                <RenderSmoothImage id="aboutPhoto" src={aboutPhoto} alt='about' />
            </div>
            <div className="about-info">


                <p className="about-text">
                    <Typical
                        wrapper="b"
                        steps={[2500,
                            'I am full stack developer living in Philadelphia, PA with my wife and daughter.My work is based on desigmning and creating dinamic and responsive applications. Outside work I am a chess player, teacher and tournament organizer.', 1500
                        ]}
                    />


                </p>


            </div>

        </div>


    )
}


export default ImageSection;