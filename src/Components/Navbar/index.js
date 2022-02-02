import React from 'react';
import {FaBars} from "react-icons/fa"
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from "./NavbarElements"

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        DM Servicios
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="Servicios">Servicios</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Nosotros">Nosotros</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Clientes">Clientes</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contacto">Accede a tu cuenta</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
