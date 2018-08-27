import React, { Component } from 'react';
import logo from './images/logo3.svg';
import logoAlt from './images/logo.svg';
import hero from './images/hero-video.mp4';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollableAnchor, {goToTop, goToAnchor, removeHash, configureAnchors} from 'react-scrollable-anchor'
import SimpleSlider from './components/slide';

configureAnchors({offset: 0, scrollDuration: 800})

const weddingMelz = () => (
  <Router>
    <div>
      <ul class="main-nav">
      <li>
          <Link to="/"><div class="logo-container"><img src={logo} alt="Logo" /></div></Link>
        </li>
        <li>
        <a href='/#section-one'> About Us </a>
        </li>
        <li>
        <a href='/#section-two'> Day of Details </a>
        </li>
        <li>
        <a href='/#section-three'> Wedding Party </a>
        </li>
        <li>
        <a href='/#section-five'> Accomodations </a>
        </li>
        <li>
        <a href='/#section-six'> Registry </a>
        </li>
        <li>
          <Link to="/about">RSVP</Link>
        </li>
        {/* <li>
          <Link to="/topics">Topics</Link>
        </li> */}
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/rsvp" component={About} />
      {/* <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>
);

//COMPONENTS//////////////////////////////////////////////////
const Home = () => (
  <div>
    {/* <SimpleSlider></SimpleSlider> */}
    <section>
    <video src={hero} autoPlay loop muted></video>
    <div class="call-to-action">
      <img src={logoAlt} />
      <div class="cta-description">
      <h3>to have and to hold.</h3>
        <p>May 13th, 2019 </p>
          <button>RSVP</button>
          </div>
    </div>
    </section>
  <ScrollableAnchor id={'section-one'}>
    <div id="section-one1"> Hello World </div>
    </ScrollableAnchor>

  <ScrollableAnchor id={'section-two'}>
    <div id="section-two2"> Hello World </div>
  </ScrollableAnchor>

  <ScrollableAnchor id={'section-three'}>
    <div id="section-three3"> Hello World </div>
  </ScrollableAnchor>

    <ScrollableAnchor id={'section-four'}>
    <div id="section-four4"> Hello World </div>
  </ScrollableAnchor>

    <ScrollableAnchor id={'section-five'}>
    <div id="section-five5"> Hello World </div>
  </ScrollableAnchor>

    <ScrollableAnchor id={'section-six'}>
    <div id="section-six6"> Hello World </div>
  </ScrollableAnchor>

    <ScrollableAnchor id={'section-seven'}>
    <div id="section-seven7"> Hello World </div>
  </ScrollableAnchor>
  </div>

);

const About = () => (
    <h2>About</h2>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default weddingMelz;
