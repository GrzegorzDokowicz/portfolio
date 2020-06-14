import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import './style.scss';

const Image = ({ fileName, alt = '' }) => {
  const data = useStaticQuery(graphql`
        query {
          allFile {
            edges {
              node {
                name
                extension
                publicURL
                childImageSharp {
                  fluid {
                    originalName
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
  `);

  const targetImage = data.allFile.edges.filter((n) => n.node.name === fileName);
  if (!targetImage[0]) {
    return null;
  }

  const prepareImageComponent = () => {
    if (!targetImage[0].node.childImageSharp && targetImage[0].node.extension === 'svg') {
      return <img src={targetImage[0].node.publicURL} alt={alt} />;
    }
    return (
      <Img
        className="image"
        fluid={targetImage[0].node.childImageSharp.fluid}
        alt={alt}
      />
    );
  };

  return (
    <>
      {prepareImageComponent()}
    </>
  );
};

export default Image;
