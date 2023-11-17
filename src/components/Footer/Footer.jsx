import React from "react";
import { FooterSocialList } from "./FooterSocialList";
import { FooterCopyright } from "./FooterCopyright";
import { Container } from "../../UI/Container/Container";
import "../../styles/FooterStyles/Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__wrapper">
                    <FooterSocialList></FooterSocialList>
                    <FooterCopyright></FooterCopyright>
                </div>
            </Container>
        </footer>
    );
};
