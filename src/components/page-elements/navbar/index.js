import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import ResponsiveFullPageContainer from '../../containers/responsive-full-page-container';

import './style.scss';

const Navbar = () => {
  const data = useStaticQuery(graphql`
                     query MyQuery {
                      allDirectory(filter: {sourceInstanceName: {eq: "views"}, name: {ne: "views"}}) {
                        edges {
                          node {
                            id
                            name
                          }
                        }
                      }
                    }
`);
  const routeArray = data.allDirectory.edges.map((node) => node.node);

  return (
    <ResponsiveFullPageContainer className="navbar">
      <nav>
        {
                    routeArray.map((route) => (
                      <AnchorLink
                        key={route.id}
                        to={`/#${route.name}`}
                        stripHash
                      >
                        {`${route.name}`}
                      </AnchorLink>
                    ))
                }
      </nav>
    </ResponsiveFullPageContainer>
  );
};

export default Navbar;
