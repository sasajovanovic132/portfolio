
import React, { Component } from 'react';

import { FaAlignRight } from 'react-icons/fa';
import './App.css';
import Nav from '../Nav/Nav';
import About from '../About/About';
import RenderSmoothImage from '../RenderSmoothImage/RenderSmoothImage';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import sampleVideo from './sampleVideo1.mp4';
import { render } from '@testing-library/react';


function App() {


  return (
    <div>
      <Router>
        <div className="App">
          <Nav />

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
          <video id='video' className='videoTag' autoPlay loop muted>
            <source src={sampleVideo} type='video/mp4' />
            <source src={sampleVideo} type="video/ogg" />
          </video>
        </div>
      </Router>



    </div>

  );
}



export default App;