import React from "react"
import ResponsivePageContainer from "../components/containers/responsive-page-container"
import Image from "../components/page-elements/image"
import Text from "../components/page-elements/text"


const IndexPage = () => (
  <ResponsivePageContainer className={'main-container'}>
    <Text type={'paragraph'}>
      Cześć
    </Text>
    <Image fileName={'gatsby-icon.png'}/>
  </ResponsivePageContainer>

)

export default IndexPage
