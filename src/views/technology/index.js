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

  return (
    <ResponsivePageContainer className="technology-view">
      <div className="technology-view__header">
        <Text type="header">
          {'Technology I\'ve used in my projects'}
        </Text>
      </div>
      <div className="technology-view__logos-grid">
        {prepareLogosNameArray.map((logo) => <Icon iconName={logo} altText={`${logo}-logo`} />)}
      </div>
    </ResponsivePageContainer>
  );
};

export default TechnologyPage;
