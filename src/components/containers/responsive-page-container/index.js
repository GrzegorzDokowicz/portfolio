import React from 'react';

import './style.scss';

const ResponsivePageContainer = ({children, className=''}) => {
  return <div className={`responsive-page-container ${className}`}>
    {children}
  </div>;
};

export default ResponsivePageContainer;