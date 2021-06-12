import React from 'react';
import myPhoto from './myPhoto.JPG';
import Typical from 'react-typical';
import RenderSmoothImage from '../RenderSmoothImage/RenderSmoothImage';
import './Home.css';
import { render } from '@testing-library/react';


const Home = () => {

    return (
        // <div className='Home'>
        <header className='Home-Header'>
            <div className="Name-Quote">
                <h1 className="name">Saša Jovanović</h1>
                <p className="quote">  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[3000,
                        'Programmer', 1500,
                        'Developer', 1500,
                        'Designer', 1500,
                        'Open Sourcer', 1500,
                        'Chess Player', 1500,
                        'Husband', 1500,
                        'Father', 1500,
                        'Serbia Born', 1500,
                        'Philly Made', 1500
                    ]}

                /></p>
            </div>
            <div className='mainPhoto'>
                <RenderSmoothImage src={myPhoto} alt='sasa' height='75%' width="75%" />
            </div>
        </header>
        //</div>
    )
}
export default Home;
//<img className="profile-photo" src={myPhoto} alt={"Sasa Jovanovic"} />