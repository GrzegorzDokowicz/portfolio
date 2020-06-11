import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

import "./style.scss"

const Image = ({fileName, alt = ''}) => {
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
  `)

    const targetImage = data.allFile.edges.find(n => {
        if (n.node.name.includes(fileName)) {
            return n.node
        }
    });
    if (!targetImage) {
        return null;
    }

    const prepareImageComponent = () => {
        if (!targetImage.node.childImageSharp && targetImage.node.extension === 'svg') {
            return <img src={targetImage.node.publicURL} alt={alt}/>
        } else {
            return <Img
                className={'image'}
                fluid={targetImage.node.childImageSharp.fluid}
                alt={alt}/>
        }
    }

    console.log('log', targetImage);
    return (
        <React.Fragment>
            {prepareImageComponent()}
        </React.Fragment>
    )
}

export default Image;
