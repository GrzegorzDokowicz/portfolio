import React from 'react';

import './style.scss';
import ResponsivePageContainer from '../../components/containers/responsive-page-container';
import Icon from '../../components/page-elements/icon';

const TechnologyPage = () => (
  <ResponsivePageContainer className="technology-view">
    <Icon altText="ReactIcon" iconName="react-original-wordmark" />
  </ResponsivePageContainer>
);

export default TechnologyPage;
