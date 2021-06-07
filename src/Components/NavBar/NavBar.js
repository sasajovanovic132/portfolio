import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import './NavBar.css';



export default class NavBar extends Component {
    state = {
        toggle: false
    }
    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        return (
            <>
                <div className="navBar">
                    <button onClick={this.Toggle}>
                        <FaAlignRight />
                    </button>
                    <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>

                        <li >about</li>


                        <li >work</li>


                        <li >ontact</li>

                    </ul>
                </div>
            </>
        );
    }
}

