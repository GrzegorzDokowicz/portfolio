import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { ReactSVG } from 'react-svg';

import './style.scss';
import Text from '../text';

import getImageData from '../../../data_layer/getImageData';

const Image = forwardRef(({
  fileName,
  alt = '',
  className,
  label = '',
  beforeInjection,
  afterInjection,
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

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  beforeInjection: PropTypes.func,
  afterInjection: PropTypes.func,
};
Image.defaultProps = {
  className: 'image__element',
  alt:'',
  label: '',
  beforeInjection: () => {},
  afterInjection: () => {},
};

export default Image;
