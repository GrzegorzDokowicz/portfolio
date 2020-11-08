import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Image from '../image';

const IconLink = ({
  fileName, href, alt, style,
}) => {
  const styles = (style || []).map((attr) => `icon-link--${attr}`).join(' ');
  return (
    <div className={`icon-link ${styles}`}>
      <a href={href}>
        <Image alt={alt} fileName={fileName} />
      </a>
    </div>
  );
};

IconLink.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  style: PropTypes.arrayOf(PropTypes.string),
};
IconLink.defaultProps = {
  style: [],
};

export default IconLink;
