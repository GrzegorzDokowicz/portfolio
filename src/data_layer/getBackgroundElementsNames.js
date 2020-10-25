import { useStaticQuery, graphql } from 'gatsby';

const getBackgroundElementsNames = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "background_elements/landing_page"}}) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `);
  return data.allFile.edges.map((el) => el.node);
};

export default getBackgroundElementsNames;
