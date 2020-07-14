import React, { useRef } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import uuid from 'react-uuid';

import ResponsivePageContainer from '../../containers/responsive-page-container';

import './style.scss';

const Navbar = () => {
  const routesArray = [{
    path: 'about',
    title: 'About Me',
  }, {
    path: 'technology',
    title: 'Technology',
  },
  ];

  const hamburgerRef = useRef(null);

  const handleHamburgerClick = () => {
    const activeClassName = 'hamburger__bars--active';
    if (hamburgerRef && hamburgerRef.current.classList.contains(activeClassName)) {
      hamburgerRef.current.classList.remove(activeClassName);
    } else if (hamburgerRef && !hamburgerRef.current.classList.contains(activeClassName)) {
      hamburgerRef.current.classList.add(activeClassName);
    }
  };

  return (
    <ResponsivePageContainer className="navbar__container">
      <nav className="navbar">

        <button onClick={handleHamburgerClick} className="navbar__hamburger">
          <span ref={hamburgerRef} className="hamburger__bars" />
        </button>

        <ul className="navbar__link-list navbar__link-list-desktop">
          {routesArray.map((route) => (
            <li key={uuid()}>
              <AnchorLink
                to={`/#${route.path}`}
                stripHash
                className="navbar__link"
              >
                {route.title}
              </AnchorLink>
            </li>
          ))}
        </ul>

      </nav>
    </ResponsivePageContainer>
  );
};

export default Navbar;
