import React from 'react';

import './style.scss';

const ResponsivePageContainer = ({ children, className = '' }) => (
  <div className={`responsive-page-container ${className}`}>
    {children}
  </div>
);

export default ResponsivePageContainer;
