import React from 'react';

import { Helmet } from 'react-helmet';
import LandingPage from './landing-page';
import TechnologyPage from './technology';
import Navbar from '../components/page-elements/navbar';
import AboutMe from './about-me';
import Projects from './projects';
import Footer from '../components/page-elements/footer';

const App = () => (
  <>
    <Helmet title="Grzegorz Dokowicz">
      <html lang="en" />
    </Helmet>
    <Navbar />
    <LandingPage />
    <AboutMe />
    <TechnologyPage />
    <Projects />
    <Footer />
  </>
);

export default App;
