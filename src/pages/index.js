import React from "react"
import ResponsivePageContainer from "../components/containers/responsive-page-container"
import Image from "../components/page-elements/image"


const IndexPage = () => (
  <ResponsivePageContainer className={'main-container'}>
    <p>Cześć</p>
    <Image fileName={'gatsby-astronaut.png'}/>
  </ResponsivePageContainer>

)

export default IndexPage
