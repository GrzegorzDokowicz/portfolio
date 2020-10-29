import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Image from '../image';

const IconLink = ({ fileName, href, alt }) => (
  <div className="icon-link">
    <a href={href}>
      <Image alt={alt} fileName={fileName} />
    </a>
  </div>
);

IconLink.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default IconLink;
