import React from 'react';
import gsap, { Sine } from 'gsap';

import './style.scss';
import ResponsivePageContainer from '../../components/containers/responsive-page-container';
import Image from '../../components/page-atoms/image';
import Text from '../../components/page-atoms/text';

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

  const animateElement = (el) => {
    if (el) {
      const random = (min, max) => {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
      };

      const randomX = random(10, 20);
      const randomY = random(20, 30);
      const randomDelay = random(0, 1);
      const randomTime2 = random(5, 10);
      const randomAngle = random(8, 12);

      gsap.set(el, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1),
        padding: 150,
      });

      const rotate = (target, direction) => {
        gsap.to(target, {
          rotation: randomAngle(direction),
          duration: randomTime2(),
          delay: randomDelay(),
          ease: Sine.easeInOut,
          onComplete: rotate,
          onCompleteParams: [target, direction * -1],
        });
      };

      const moveX = (target, direction) => {
        gsap.to(target, {
          x: randomX(direction),
          duration: randomTime2(),
          ease: Sine.easeInOut,
          onComplete: moveX,
          onCompleteParams: [target, direction * -1],
        });
      };

      const moveY = (target, direction) => {
        gsap.to(target, {
          y: randomY(direction),
          duration: randomTime2(),
          ease: Sine.easeInOut,
          onComplete: moveY,
          onCompleteParams: [target, direction * -1],
        });
      };

      moveX(el, 1);
      moveY(el, -1);
      rotate(el, 1);
    }
  };

  return (
    <ResponsivePageContainer id="landing_page" className="landing-view" backgroundSVGName="background">
      <div className="landing-view__container landing-view__container--right">
        <Image fileName="LandingImage" afterInjection={() => getHeroImageElements().map((el) => animateElement(el))} />
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
