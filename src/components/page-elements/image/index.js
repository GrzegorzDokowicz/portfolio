import React from "react"
import {useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.scss"

const Image = ({fileName, alt =''})=> {
  const data = useStaticQuery(graphql`
        query {
          allFile {
            edges {
              node {
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
  `)

  const image = data.allFile.edges.find(n => {
    return n.node.childImageSharp.fluid.originalName.includes(fileName);
  });
    if (!image) { return null; }

  return (
    <React.Fragment>
      <Img
        className={'image'}
        fixed={image.node.childImageSharp.fluid}
        alt={alt}
      />
    </React.Fragment>
  )
}

export default Image;
