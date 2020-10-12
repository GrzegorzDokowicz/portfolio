import React from 'react';

import { Helmet } from 'react-helmet';
import LandingPage from './landing-page';
import TechnologyPage from './technology';
import Navbar from '../components/page-elements/navbar';
import AboutMe from './about-me';
import Projects from './projects';

const App = () => (
  <>
    <Helmet title="Grzegorz Dokowicz" />
    <Navbar />
    <LandingPage />
    <AboutMe />
    <TechnologyPage />
    <Projects />
  </>
);

export default App;
