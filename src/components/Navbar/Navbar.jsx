import React from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarButton } from "./NavbarButton";
import { Container } from "../../UI/Container/Container";

import "../../styles/NavbarStyles/Navbar.css";

export const Navbar = ({ setIsActive }) => {
    return (
        <nav className="nav">
            <Container>
                <div className="nav-row">
                    <NavbarLogo></NavbarLogo>
                    <NavbarLinks></NavbarLinks>
                    <NavbarButton setIsActive={setIsActive}></NavbarButton>
                </div>
            </Container>
        </nav>
    );
};
