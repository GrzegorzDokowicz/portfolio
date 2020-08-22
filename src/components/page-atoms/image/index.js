import React, { forwardRef } from 'react';
import Img from 'gatsby-image';
import { ReactSVG } from 'react-svg';

import './style.scss';
import Text from '../text';

import getImageData from '../../../data_layer/getImageData';

const Image = forwardRef(({
  fileName,
  alt = '',
  className = 'image__element',
  label = '',
  beforeInjection = () => {
  },
  afterInjection = () => {
  },
},
ref) => {
  const [...nodes] = getImageData();

  const targetImage = nodes.filter((n) => n.node.name === fileName);

  // check if targetImage exist - if not then return null
  if (!targetImage[0]) {
    return null;
  }

  const prepareImageComponent = () => {
    if (!targetImage[0].node.childImageSharp && targetImage[0].node.extension === 'svg') {
      return (
        <ReactSVG
          className={className}
          src={targetImage[0].node.publicURL}
          alt={alt}
          afterInjection={afterInjection}
          beforeInjection={beforeInjection}
          ref={ref}
        />
      );
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
});

export default Image;
