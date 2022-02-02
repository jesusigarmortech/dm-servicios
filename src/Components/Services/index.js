import React from 'react'
import Icon1 from "../../Imagenes/servicios1.svg"
import Icon2 from "../../Imagenes/servicios2.svg"
import Icon3 from "../../Imagenes/planeacion.png"
import Icon4 from "../../Imagenes/construccionProyectos.png"
import Icon5 from "../../Imagenes/construccionObra.png"
import Icon6 from "../../Imagenes/const2.png"


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
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Elaboración de proyectos</ServicesH2>
                    <ServicesP>Desarrollamos proyectos de alta calidad</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>Construcción de obra civil</ServicesH2>
                    <ServicesP>Construimos obra civil y electromecánica a tu medida</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Presupuesto y planeación</ServicesH2>
                    <ServicesP>Planeamos y presupuestamos obras</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
