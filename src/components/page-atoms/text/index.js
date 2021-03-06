import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Text = ({
  type, children, htmlFor, color,
}) => {
  const getClass = (className) => `text text--${color} text--${className}`;

  switch (type) {
    case 'header':
      return <h1 className={getClass('h1')}>{children}</h1>;
    case 'subheader':
      return <h2 className={getClass('h2')}>{children}</h2>;
    case 'title':
      return <h3 className={getClass('title')}>{children}</h3>;
    case 'title-small':
      return <h3 className={getClass('title-small')}>{children}</h3>;
    case 'icon':
      return <span className={getClass('image-icon-description')}>{children}</span>;
    case 'button':
      return <span className={getClass('image-icon-description')}>{children}</span>;
    case 'paragraph':
      return <p className={getClass('paragraph')}>{children}</p>;
    case 'label':
      return <label className={getClass('label')} htmlFor={htmlFor}>{children}</label>;
    default:
      return <span className={getClass('span')}>{children}</span>;
  }
};

Text.propTypes = {
  type: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Text.defaultProps = {
  htmlFor: '',
  color: 'black',
};

export default Text;
