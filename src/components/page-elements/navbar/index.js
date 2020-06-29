import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import uuid from 'react-uuid';

import ResponsiveFullPageContainer from '../../containers/responsive-full-page-container';

import './style.scss';

const Navbar = () => {
  const routesArray = [{
    path: 'about',
    title: 'About Me !',
  }, {
    path: 'technology',
    title: 'Technology',
  },
  ];

  return (
    <ResponsiveFullPageContainer className="navbar">
      <nav>
        {routesArray.map((route) => (
          <AnchorLink
            key={uuid()}
            to={`/#${route.path}`}
            stripHash
            className="navbar__link"
          >
            {route.title}
          </AnchorLink>
        ))}
      </nav>
    </ResponsiveFullPageContainer>
  );
};

export default Navbar;
