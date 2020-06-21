import React from 'react';
import './style.scss';
import Text from '../text';

const Button = ({
  children,
  iconButton = false,
  type = 'button',
  onClick,
  style = 'default',
  color = 'primary',
}) => {
  const clickButton = (event) => {
    event.preventDefault();
    if (onClick) {
      onClick(event);
    }
  };
  const className = (style || []).map((attr) => `button--${attr}`).join(' ');

  return (
    <button type={type} className={`button ${className}`} onClick={clickButton}>
      <Text type={iconButton ? 'icon-description' : 'button-text'} color={color}>
        {children}
      </Text>
    </button>
  );
};

export default Button;
