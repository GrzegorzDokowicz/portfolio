import { useStaticQuery, graphql } from 'gatsby';

const getTechnologyLogosNames = () => {
  const data = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "tech"}}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }`);
  return data.allFile.edges;
};

export default getTechnologyLogosNames;
