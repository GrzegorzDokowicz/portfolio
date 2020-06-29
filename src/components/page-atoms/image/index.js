import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { ReactSVG } from 'react-svg';

import './style.scss';
import Text from '../text';

const Image = ({
  fileName, alt = '', className = 'image__element', label = '',
}) => {
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
      return <ReactSVG className={className} src={targetImage[0].node.publicURL} alt={alt} />;
    }
    return (
      <Img
        className={className}
        fluid={targetImage[0].node.childImageSharp.fluid}
        alt={alt}
      />
    );
  };

  return (
    <div className="image">
      {prepareImageComponent()}
      {label !== '' ? (
        <div className="image__label">
          <Text type="title-small">{label}</Text>
        </div>
      ) : ''}
    </div>
  );
};

export default Image;
