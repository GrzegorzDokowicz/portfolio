import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Image from '../image';

const ImageIcon = ({
  iconName, altText, label, style,
}) => {
  const className = (style || []).map((attr) => `button--${attr}`).join(' ');

  return (
    <Image className={`image-icon ${className}`} fileName={iconName} alt={altText} label={label} />
  );
};

ImageIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  label: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.string),
};

ImageIcon.defaultProps = {
  label: '',
  style: [],
};
export default ImageIcon;
