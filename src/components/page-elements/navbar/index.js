import React, { useRef, useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import uuid from 'react-uuid';
import { gsap, Power1 } from 'gsap';

import './style.scss';
import Text from '../../page-atoms/text';

const Navbar = () => {
  const [isMobileNavbarActive, setMobileNavbarStatus] = useState(false);
  const mobileListClassName = 'navbar__link-list--mobile';
  const routesArray = [
    {
      path: 'landing_page',
      title: 'Home',
    }, {
      path: 'about',
      title: 'About Me',
    }, {
      path: 'technology',
      title: 'Technology',
    },
  ];
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
    if (!isMobileNavbarActive) {
      setMobileNavbarStatus(true);
      gsap.to(`.${mobileListClassName}`, gsapConfig.active);
    } else {
      setMobileNavbarStatus(false);
      gsap.to(`.${mobileListClassName}`, gsapConfig.disabled);
    }
  };

  // functions which are called when you click on hamburger button
  const handleHamburgerClick = () => {
    const activeClassName = 'hamburger__bars--active';
    if (hamburgerRef && hamburgerRef.current.classList.contains(activeClassName)) {
      // Hamburger is disabled
      hamburgerRef.current.classList.remove(activeClassName);
      handleMobileNavigationAnimations();
    } else if (hamburgerRef && !hamburgerRef.current.classList.contains(activeClassName)) {
      // Hamburger is active
      hamburgerRef.current.classList.add(activeClassName);
      handleMobileNavigationAnimations();
    }
  };

  // functions which are called when you click on moblie navigation link
  const handleMobileLinkClick = () => {
    setMobileNavbarStatus(false);
    handleMobileNavigationAnimations();
    handleHamburgerClick();
  };

  const generateNavLinks = (mobile = false) => routesArray.map((route) => (
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
    <div className="navbar__container">
      <nav className="navbar">

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
    </div>
  );
};

export default Navbar;
