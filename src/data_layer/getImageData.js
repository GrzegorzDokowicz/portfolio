import { graphql, useStaticQuery } from 'gatsby';

const getImageData = () => {
  const data = useStaticQuery(graphql`
        query {
          allFile {
            edges {
              node {
                name
                extension
                publicURL
                childImageSharp {
                  fluid {
                    originalName
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
  `);
  return data.allFile.edges;
};

export default getImageData;
