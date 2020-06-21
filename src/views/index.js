import React from 'react';

import LandingPage from './main';
import TechnologyPage from './technology';
import Navbar from '../components/page-elements/navbar';

const App = () => (
  <>
    <Navbar />
    <LandingPage />
    <TechnologyPage />
  </>
);

export default App;
