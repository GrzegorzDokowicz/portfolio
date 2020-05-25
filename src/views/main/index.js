import React from "react"

import "./style.scss"
import Image from "../../components/page-elements/image"
import ResponsivePageContainer from "../../components/containers/responsive-page-container"
import Text from "../../components/page-elements/text"

const Main = () => {
  return (
    <ResponsivePageContainer className={"main-container"}>
      <div className="hero-image">
        <Image fileName={"HeroImage.png"}/>
      </div>
      <div className="text-area">
        <Text type={"paragraph"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi cum ea est ex facilis nulla pariatur
          quam quas quasi, quibusdam repudiandae sit, tenetur vitae voluptatem voluptatibus voluptatum. Deserunt dolores
          esse est expedita incidunt iusto libero nam optio quidem. Optio.
        </Text>
      </div>
    </ResponsivePageContainer>
  )
}

export default Main