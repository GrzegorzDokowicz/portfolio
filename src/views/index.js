import React from 'react';

import LandingPage from './landing-page';
import TechnologyPage from './technology';
import Navbar from '../components/page-elements/navbar';
import AboutMe from "./about-me";

const App = () => (
    <>
        <Navbar/>
        <LandingPage/>
        <AboutMe/>
        <TechnologyPage/>
    </>
);

export default App;
