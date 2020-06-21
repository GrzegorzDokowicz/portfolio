import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './style.scss';
import ResponsivePageContainer from '../../components/containers/responsive-page-container';
import Icon from '../../components/page-elements/icon';
import Text from '../../components/page-elements/text';

const TechnologyPage = () => {
  const data = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "tech"}}) {
                edges {
                    node {
                        name
                    }
                }
            }
        }`);
  const prepareLogosNameArray = data.allFile.edges.map((singleEdge) => singleEdge.node.name);
  const prepareLogoDataObject = prepareLogosNameArray.map((element) => ({
    fileName: element,
    labelName: element.split('_').slice(1).toString(),
  }));

  return (
    <ResponsivePageContainer className="technology-view">
      <div className="technology-view__header">
        <Text type="header">
          {'Technology I\'ve used in my projects'}
        </Text>
      </div>
      <div className="technology-view__logos-grid">
        {prepareLogoDataObject.map((logo) => (
          <Icon
            iconName={logo.fileName}
            label={logo.labelName}
            altText={`${logo.labelName}__logo`}
          />
        ))}
      </div>
    </ResponsivePageContainer>
  );
};

export default TechnologyPage;