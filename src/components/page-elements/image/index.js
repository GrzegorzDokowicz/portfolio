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
                  fixed {
                    originalName
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
  `)

  const image = data.allFile.edges.find(n => {
    return n.node.childImageSharp.fixed.originalName.includes(fileName);
  });
    if (!image) { return null; }

  return (
    <div>

      <Img
        fixed={image.node.childImageSharp.fixed}
        alt={alt}
      />
    </div>
  )
}

export default Image;
