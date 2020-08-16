import React, {useRef} from 'react';

import './style.scss';
import ResponsivePageContainer from '../../components/containers/responsive-page-container';
import Image from "../../components/page-atoms/image";
import Text from "../../components/page-atoms/text";

const LandingPage = () => {
    const animationsItems = ['plant', 'character', 'clouds', 'background_cloud']
    const animationTarget = useRef(null)


    return <ResponsivePageContainer id="landing_page" className="landing-view">
        <div className="landing-view__container landing-view__container--right">
            <div className="referance-wrapper" ref={animationTarget}>
            <Image fileName={'LandingImage'}/>
            </div>
        </div>
        <div className="landing-view__container landing-view__container--left">
            <Text type={'title'}>
                Grzegorz Dokowicz
            </Text>
            <Text type={'title-small'}>
                Front End Developer
            </Text>
            <Text type={'paragraph'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt doloremque
                doloribus laborum magnam necessitatibus, non officia quos! Animi atque beatae, cumque, dicta eaque est
                natus quaerat quia rem sapiente vero?</Text>
        </div>
    </ResponsivePageContainer>
};

export default LandingPage;
