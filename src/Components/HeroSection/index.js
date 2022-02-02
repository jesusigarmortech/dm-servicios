import React,{useState} from 'react';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from "./HeroElements"
import Video from "../../Videos/video.mp4"
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Soluciones integrales de Ingenieria Electrica.</HeroH1>
                <HeroP>
                    Contactanos para atender tus necesidades
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="contacto" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary={true}
                        dark={true}
                    >
                        Contactanos{hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;