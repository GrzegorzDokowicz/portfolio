import React from 'react';

import './style.scss';

const ResponsivePageContainer = ({ children, className = '', id }) => (
  <div id={id || ''} className={`responsive-page-container ${className}`}>
    {children}
  </div>
);

export default ResponsivePageContainer;
