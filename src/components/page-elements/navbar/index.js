import React, { useRef, useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import uuid from 'react-uuid'; // TODO check if possible to eliminate
import { gsap, Power1 } from 'gsap';

import ROUTES from './routes.config';
import './style.scss';
import Text from '../../page-atoms/text';
import Image from '../../page-atoms/image';

const Navbar = () => {
  const [isMobileNavbarActive, setMobileNavbarStatus] = useState(false);
  const [hamburgerClicked, setHamburgerStatus] = useState(false);
  const mobileListClassName = 'navbar__link-list--mobile';
  const hamburgerRef = useRef(null);

  // Mobile navigation animations
  const handleMobileNavigationAnimations = () => {
    const gsapConfig = {
      disabled: {
        duration: 2,
        ease: Power1.easeOut,
        transform: 'translateY(-100%)',
      },
      active: {
        duration: 2,
        ease: Power1.easeOut,
        transform: 'translateY(0)',
      },
    };
    gsap.to(`.${mobileListClassName}`, !isMobileNavbarActive ? gsapConfig.active : gsapConfig.disabled);
    setMobileNavbarStatus((prevState) => !prevState);
  };

  // functions which are called when you click on hamburger button
  const handleHamburgerClick = () => {
    const activeClassName = 'hamburger__bars--active';
    if (hamburgerRef) {
      setHamburgerStatus(!hamburgerClicked);
      hamburgerRef.current.classList.toggle(activeClassName);
      handleMobileNavigationAnimations();
    }
  };

  // functions which are called when you click on moblie navigation link
  const handleMobileLinkClick = () => {
    setMobileNavbarStatus(false);
    setHamburgerStatus(false);
    handleMobileNavigationAnimations();
    handleHamburgerClick();
  };

  const generateNavLinks = (mobile = false) => ROUTES.map((route) => (
    <li
      onClick={() => {
        handleMobileLinkClick();
      }}
      role="menuitem"
      key={uuid()}
    >
      <AnchorLink
        to={`/#${route.path}`}
        stripHash
        className={`navbar__link ${mobile ? 'navbar__link--mobile' : ''}`}
      >
        <Text type="title" color="white">
          {route.title}
        </Text>
      </AnchorLink>
    </li>
  ));

  return (
    <nav className="navbar">

      <div className="navbar__logo">
        <Image alt="site-logo" fileName="Logo" />
      </div>

      <button onClick={handleHamburgerClick} className="navbar__hamburger">
        <span ref={hamburgerRef} className="hamburger__bars" />
      </button>

      <ul className="navbar__link-list navbar__link-list--desktop">
        {generateNavLinks()}
      </ul>

      <ul className="navbar__link-list navbar__link-list--mobile">
        {generateNavLinks(true)}
      </ul>

    </nav>
  );
};

export default Navbar;
