import React from "react";
import "../../styles/ContentStyles/Content.css";
import { ContactList } from "./ContactList";
import { Container } from "../../UI/Container/Container";
export const Contacts = () => {
    return (
        <div className="content-section">
            <Container>
                <h1 className="title-1">My contacts</h1>
                <ContactList></ContactList>
            </Container>
        </div>
    );
};
