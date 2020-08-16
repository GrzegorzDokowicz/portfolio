import React from 'react';

import './style.scss';

const ResponsiveFullPageContainer = ({ children, className = '' }) => (
  <div className={`responsive-full-page-container ${className}`}>
    {children}
  </div>
);

export default ResponsiveFullPageContainer;
