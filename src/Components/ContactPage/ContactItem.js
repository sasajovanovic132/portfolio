import React from 'react';
import './ContactPage.css';


function ContactItem({ icon, text }) {

    return (
        <div className="ContactItem">
            <div className='contact'>
                <img src={icon} alt='' />
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ContactItem;