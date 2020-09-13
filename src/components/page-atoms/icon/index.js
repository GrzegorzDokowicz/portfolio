import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Image from '../image';

const Icon = ({
  iconName, altText, label, style,
}) => {
  const className = (style || []).map((attr) => `button--${attr}`).join(' ');

  return (
    <Image className={`icon ${className}`} fileName={iconName} alt={altText} label={label} />
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  label: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.string),
};

Icon.defaultProps = {
  label: '',
  style: [],
};
export default Icon;
