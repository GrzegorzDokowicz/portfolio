import React from 'react';
import uuid from 'react-uuid';

import './style.scss';
import ResponsivePageContainer from '../../components/containers/responsive-page-container';
import Icon from '../../components/page-atoms/icon';
import Text from '../../components/page-atoms/text';

import getTechnologyLogosNames from '../../data_layer/getTechnologyLogosNames';

const TechnologyPage = () => {
  const [...nodes] = getTechnologyLogosNames();

  const prepareLogoDataObject = nodes.map((singleEdge) => singleEdge.node)
    .map((element) => ({
      id: element.id,
      fileName: element.name,
      labelName: element.name.split('_').slice(1).toString(),
    }));

  return (
    <ResponsivePageContainer id="technology" className="technology-view">
      <div className="technology-view__header">
        <Text type="header">
          {'Technology I\'ve used in my projects'}
        </Text>
      </div>
      <div className="technology-view__logos-grid">
        {prepareLogoDataObject.map((logo) => (
          <div key={uuid()} className="technology-view__logo">
            <Icon
              key={logo.id}
              iconName={logo.fileName}
              label={logo.labelName}
              altText={`${logo.labelName}__logo`}
            />
          </div>
        ))}
      </div>
    </ResponsivePageContainer>
  );
};

export default TechnologyPage;
