import React from 'react';
import './style.scss';
import Image from '../image';

const Icon = ({
  iconName, altText, label = '', type = 'bubble', style,
}) => {
  const className = (style || []).map((attr) => `button--${attr}`).join(' ');

  return (
    <Image className={`icon icon--${type} ${className}`} fileName={iconName} alt={altText} label={label} />
  );
};

export default Icon;