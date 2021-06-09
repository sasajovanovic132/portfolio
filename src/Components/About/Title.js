import React from 'react';
import Typical from 'react-typical';
import './Title.scss';



function Title({ title, span }) {
    return (
        <div className="Title">

            <h3>
                About Me
                <span>{span}</span>
            </h3>
        </div>
    )
}
export default Title;