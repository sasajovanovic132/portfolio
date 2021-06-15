import React from 'react';
import './ContactPage.scss';
import phone from '../../img/phone.svg';
import email from '../../img/emailme.svg';
import location from '../../img/location.svg';
import facebook from '../../img/facebook.svg';
import github from '../../img/github.svg';
import chess from '../../img/chess.jpeg';
import ContactItem from './ContactItem';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function ContactPage() {

    return (
        <div className="ContactPage">
            <div className='map-sect'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24444.61063975934!2d-75.20752507872666!3d40.017910175975516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b865fe4e360d%3A0xfafd4bda123ed70e!2sEast%20Falls%2C%20Philadelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1623550984950!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>

                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt" />
                    </Link>

                </div>
            </div>
            <div className='contact-sect'>
                <ContactItem icon="https://img.icons8.com/color/48/000000/apple-phone.png" text={'(215)-519-8349'} />
                <ContactItem icon="https://img.icons8.com/fluent/48/000000/email.png" text={' sasajcode@gmail.com'} />
                <ContactItem icon="https://img.icons8.com/dusk/64/000000/place-marker--v3.png" text={'Philadelphia'} />



            </div>
        </div>
    )
}

export default ContactPage;