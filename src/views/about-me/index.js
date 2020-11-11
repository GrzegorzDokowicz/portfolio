import React, { useEffect } from 'react';

import './style.scss';
import Image from '../../components/page-atoms/image';
import ResponsivePageContainer from '../../components/containers/responsive-page-container';
import Text from '../../components/page-atoms/text';
import IconLink from '../../components/page-atoms/icon-link';

import slideIn from '../../gsap_animations/slideIn';
import { MAIL_URL, GITHUB_URL, LINKEDIN_URL } from './icons_url_configs';

const AboutMe = () => {
  const animateElements = (imageSelector, textSelector) => {
    slideIn(imageSelector, false);
    slideIn(textSelector, true, imageSelector);
  };
  useEffect(() => animateElements('.about-me__container--right', '.about-me__container--left'), []);

  return (
    <ResponsivePageContainer id="about" className="about-me" backgroundColor="dark">
      <div className="about-me__container about-me__container--right">
        <div className="hero-image">
          <Image fileName="HeroImage" alt="Hero image" />
        </div>
      </div>
      <div className="about-me__container about-me__container--left">
        <div className="text-area">
          <Text type="header" color="white">
            About me
          </Text>
          <Text type="paragraph" color="white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Autem commodi cum ea est ex facilis nulla pariatur
            quam quas quasi, quibusdam repudiandae sit, tenetur
            vitae voluptatem voluptatibus voluptatum. Deserunt
            dolores
            esse est expedita incidunt iusto libero nam optio quidem. Optio.
          </Text>
        </div>
        <div className="about-me__links">
          <IconLink fileName="github-icon" targetBlank alt="github link" href={GITHUB_URL} />
          <IconLink fileName="linkedin-icon" targetBlank alt="linkedin link" href={LINKEDIN_URL} />
          <IconLink fileName="mail-icon" targetBlank alt="e-mail link" href={MAIL_URL} />
        </div>
      </div>
    </ResponsivePageContainer>
  );
};

export default AboutMe;
