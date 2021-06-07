import React from 'react';
import myPhoto from './myPhoto.JPG';
import Typical from 'react-typical';

import './Home.css';


const Home = () => {
    return (
        // <div className='Home'>
        <header className='Home-Header'>
            <img className="profile-photo" src={myPhoto} alt={"Sasa Jovanovic"} />
            <div className="Name-Quote">
                <h1 className="name">Sasa Jovanovic</h1>
                <p className="quote">  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Developer', 1000,
                        'Designer', 1000,
                        'Open Sourcer', 1000,
                        'Chess Player', 1000,
                        /*'Husband', 1000,
                        'Father', 1000,*/
                        'Based in Philadelphia', 1000
                    ]}

                /></p>
            </div>

        </header>
        //</div>
    )
}
export default Home;