import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './style.scss';

const ResponsivePageContainer = ({
  children, className = '', id, backgroundSVGName = null, backgroundColor = 'default',
}) => {
  const data = useStaticQuery(graphql`
  {
    allFile {
      nodes {
        name
        publicURL
      }
    }
  }`);

  const prepareBackgroundImage = () => {
    const targetFile = data.allFile.nodes.filter((el) => el.name === backgroundSVGName)[0];

    return targetFile ? targetFile.publicURL : '';
  };

  const backgroundComponent = (
    <div id={id || ''} className={`responsive-page-container responsive-page-container--${backgroundColor} ${className}`} style={{ backgroundColor }}>
      {children}
    </div>
  );

  const backgroundSVGComponent = (
    <div style={{ backgroundImage: `url(${prepareBackgroundImage()})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} id={id || ''} className={`responsive-page-container responsive-page-container--no-background-color ${className}`}>
      {children}
    </div>
  );

  return backgroundSVGName ? backgroundSVGComponent : backgroundComponent;
};

export default ResponsivePageContainer;
