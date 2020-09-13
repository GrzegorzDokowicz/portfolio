import React from 'react';

import LandingPage from './landing-page';
import TechnologyPage from './technology';
import Navbar from '../components/page-elements/navbar';
import AboutMe from './about-me';
import Projects from './projects';

const App = () => (
  <>
    <Navbar />
    <LandingPage />
    <AboutMe />
    <TechnologyPage />
    <Projects />
  </>
);

export default App;
