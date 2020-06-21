import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import ResponsiveFullPageContainer from '../../containers/responsive-full-page-container';

import './style.scss';

const Navbar = () => (
  <ResponsiveFullPageContainer className="navbar">
    <nav>
      <AnchorLink to="/#about" stripHash>About Me !</AnchorLink>
      <AnchorLink to="/#technology" stripHash>Tech</AnchorLink>
    </nav>
  </ResponsiveFullPageContainer>
);

export default Navbar;
