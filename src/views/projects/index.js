import React, { useEffect, useState } from 'react';

import './style.scss';
import ResponsivePageContainer from '../../components/containers/responsive-page-container';
import { GITHUB_PORTFOLIO_URL } from './url.config';
import Card from '../../components/page-elements/card';
import Text from '../../components/page-atoms/text';
import slideIn from '../../gsap_animations/slideIn';

const Projects = () => {
  const [cards, setCards] = useState(null);
  const bodyText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, repellat?';
    useEffect(() => setCards(document.querySelectorAll('.card')), []); //eslint-disable-line

  if (cards) {
    cards.forEach((el, index) => (index % 2 === 0 ? slideIn(el, true) : slideIn(el, false)));
  }

  return (
    <ResponsivePageContainer id="projects" className="projects-view">
      <Text type="title">
        Projects
      </Text>
      <Card
        imageOnLeft
        bodyText={bodyText}
        title="test"
        imageAltText="test"
        url={GITHUB_PORTFOLIO_URL}
        imageFileName="HeroImage"
      />
      <Card
        imageOnLeft={false}
        bodyText={bodyText}
        title="test"
        imageAltText="test"
        url={GITHUB_PORTFOLIO_URL}
        imageFileName="HeroImage"
      />
      <Card
        bodyText={bodyText}
        title="test"
        imageAltText="test"
        url={GITHUB_PORTFOLIO_URL}
        imageFileName="HeroImage"
      />

    </ResponsivePageContainer>
  );
};

export default Projects;
