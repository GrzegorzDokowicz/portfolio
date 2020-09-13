import React from 'react';
import uuid from 'react-uuid';

import './style.scss';
import ResponsivePageContainer from '../../components/containers/responsive-page-container';
import Image from '../../components/page-atoms/image';
import Text from '../../components/page-atoms/text';

import getBackgroundElementsNames from '../../data_layer/getBackgroundElementsNames';
import randomFlow from '../../gsap_animations/randomFlow';

const LandingPage = () => {
  const getHeroImageElements = () => {
    const heroIDs = [
      'top_right', 'bottom_right', 'bottom_left', 'middle_left', 'middle_right',
    ];

    try {
      return heroIDs.map((id) => {
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

      <div className="background-elements">
        {getBackgroundElementsNames().map((el) => (
          <div key={uuid()} className={`background-elements__${el}`}>
            <Image alt={`background-elements__${el}`} className={el} fileName={el} />
          </div>
        ))}
      </div>

      <div className="landing-view__container landing-view__container--right">
        <Image
          alt="Landing image"
          fileName="LandingImage"
          afterInjection={() => getHeroImageElements().map((el) => randomFlow(el))}
        />
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
