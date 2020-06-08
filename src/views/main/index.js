import React from "react"

import "./style.scss"
import Image from "../../components/page-elements/image"
import ResponsivePageContainer from "../../components/containers/responsive-page-container"
import Text from "../../components/page-elements/text"

const Main = () => {
  return (
    <ResponsivePageContainer className={"landing-view"}>
      <div className="landing-view__container landing-view__container--right">
        <div className="hero-image">
          <Image fileName={"HeroImage.png"}/>
        </div>
      </div>
      <div className="landing-view__container landing-view__container--left">
        <div className="text-area">
          <Text type={"header"}>
            Grzegorz Dokowicz
          </Text>
          <Text type={"sub-header"}>
            Front End Developer
          </Text>
          <Text type={"paragraph"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi cum ea est ex facilis nulla pariatur
            quam quas quasi, quibusdam repudiandae sit, tenetur vitae voluptatem voluptatibus voluptatum. Deserunt
            dolores
            esse est expedita incidunt iusto libero nam optio quidem. Optio.
          </Text>
        </div>
      </div>
    </ResponsivePageContainer>
  )
}

export default Main