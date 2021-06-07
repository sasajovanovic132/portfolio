
import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import sampleVideo from './sampleVideo1.mp4';


function App() {

  return (

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
        </video>
      </div>
    </Router>
  );
}

export default App;