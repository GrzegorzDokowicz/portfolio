import React from 'react';

import './style.scss';
import ResponsivePageContainer from '../../components/containers/responsive-page-container';
import Image from '../../components/page-atoms/image';
import Text from '../../components/page-atoms/text';

import getBackgroundElementsNames from '../../data_layer/getBackgroundElementsNames';
import randomFlow from '../../gsap_animations/randomFlow';
import scrollDown from '../../gsap_animations/scrollDown';

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
  const getScrollDownArrows = () => {
    const scrollArrows = ['scroll_down_arrows'];
    try {
      return scrollArrows.map((id) => {
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
          <div key={el.id} className={`background-elements__${el.name}`}>
            <Image className={el.name} fileName={el.name} />
          </div>
        ))}
      </div>
      <div className="landing-view__container">
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
            {'I\'m self taught web developer based in Poznań, Poland. Usually working with React.'}
          </Text>
        </div>
      </div>
      <Image
        alt="scroll down icon"
        fileName="scroll_down_icon"
        className="scroll_down_icon__container"
        afterInjection={() => getScrollDownArrows().map((el) => scrollDown(el))}
      />
    </ResponsivePageContainer>
  );
};

export default LandingPage;
