import React from 'react';

import './style.scss';
import ResponsivePageContainer from '../../components/containers/responsive-page-container';
import { GITHUB_PORTFOLIO_URL } from './url.config';
import Card from '../../components/page-elements/card';

const Projects = () => {
  const bodyText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, repellat?';
  return (
    <ResponsivePageContainer id="technology" className="technology-view">
      <Card bodyText={bodyText} title="test" imageAltText="test" url={GITHUB_PORTFOLIO_URL} imageFileName="HeroImage" />
    </ResponsivePageContainer>
  );
};

export default Projects;
