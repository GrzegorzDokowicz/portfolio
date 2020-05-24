import React from "react"
import ResponsivePageContainer from "../components/containers/responsive-page-container"
import Image from "../components/page-elements/image"
import Text from "../components/page-elements/text"
import Button from "../components/page-elements/button"


const IndexPage = () => (
  <ResponsivePageContainer className={'main-container'}>
    <Text type={'paragraph'}>
      Cześć
    </Text>
    <Image fileName={'gatsby-icon.png'}/>
    <Button onClick={()=>{console.log('click')}} style={['filled-hover']}>
      Przycisk
    </Button>
  </ResponsivePageContainer>

)

export default IndexPage
