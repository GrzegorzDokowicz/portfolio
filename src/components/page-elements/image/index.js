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
    <div>
      <h1>Hello gatsby-image</h1>
      <Img
        fluid={image.node.childImageSharp.fluid}
        alt={alt}
      />
    </div>
  )
}

export default Image;
