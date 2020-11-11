import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Image from '../image';

const IconLink = ({
  fileName, href, alt, style, targetBlank,
}) => {
  const styles = (style || []).map((attr) => `icon-link--${attr}`).join(' ');
  return (
    <div className={`icon-link ${styles}`}>
      <a target={targetBlank ? '_blank' : '_self'} href={href}>
        <Image alt={alt} fileName={fileName} />
      </a>
    </div>
  );
};

IconLink.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  targetBlank: PropTypes.bool,
  style: PropTypes.arrayOf(PropTypes.string),
};
IconLink.defaultProps = {
  targetBlank: false,
  style: [],
};

export default IconLink;
