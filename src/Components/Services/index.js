import React from 'react'
import Icon1 from "../../Imagenes/servicios1.svg"
import Icon2 from "../../Imagenes/servicios2.svg"
import Icon3 from "../../Imagenes/servicios3.svg"
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from "./ServicesElements"

const Services = () => {
    return (
        <ServicesContainer id="Servicios">
            <ServicesH1>Nuestros Servicios</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Construcción de obra civil y electromecánica.</ServicesH2>
                    <ServicesP>Descripción del servicio 1</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Construcción de obra civil y electromecánica.</ServicesH2>
                    <ServicesP>Descripción del servicio 1</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Construcción de obra civil y electromecánica.</ServicesH2>
                    <ServicesP>Descripción del servicio 1</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
