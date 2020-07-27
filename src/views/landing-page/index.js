import React from 'react';

import './style.scss';
import ResponsivePageContainer from '../../components/containers/responsive-page-container';
import Image from '../../components/page-atoms/image';
import Text from '../../components/page-atoms/text';

const LandingPage = () => {
  const getHeroImageElements = () => {
    const heroIds = [
      'plant', 'character', 'clouds', 'background_cloud',
    ];

    try {
      return heroIds.map((id) => {
        const element = document.getElementById(id); // eslint-disable-line no-undef

        if (element) {
          return element;
        }

        throw new Error();
      });
    } catch ($error) {
      return false;
    }
  };

  return (
    <ResponsivePageContainer id="landing_page" className="landing-view">
      <div className="landing-view__container landing-view__container--right">
        <Image fileName="LandingImage" afterInjection={() => getHeroImageElements()} />
      </div>
      <div className="landing-view__container landing-view__container--left">
        <Text type="title">
          Grzegorz Dokowicz
        </Text>
        <Text type="title-small">
          Front End Developer
        </Text>
        <Text type="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt doloremque
          doloribus laborum magnam necessitatibus, non officia quos! Animi atque beatae, cumque,
          dicta eaque est natus quaerat quia rem sapiente vero?
        </Text>
      </div>
    </ResponsivePageContainer>
  );
};

export default LandingPage;
