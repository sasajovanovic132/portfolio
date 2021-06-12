import React from 'react';
import '../App/App.css';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

    const navStyle = {
        color: 'rgb(188, 211, 241)',
        listStyle: 'none',
        textDecoration: 'none'

    }

    return (
        <nav>
            <Link style={navStyle} to='/'>
                <li>Logo</li>
            </Link>
            <ul className='nav-links' >
                <Link style={navStyle} to='/about'>
                    <li>about</li>
                </Link>
                <Link style={navStyle} to='/projects'>
                    <li>work</li>
                </Link>
                <Link style={navStyle} to='/contact'>
                    <li>contact</li>
                </Link>
            </ul>
        </nav>

    )

}
export default Nav;
