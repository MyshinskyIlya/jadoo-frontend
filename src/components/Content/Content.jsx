import React from "react";
import "../../styles/ContentStyles/Content.css";
import { Container } from "../../UI/Container/Container";
import { ContentList } from "./ContentList";

export const Content = () => {
    return (
        <div className="content-section">
            <Container>
                <ContentList></ContentList>
            </Container>
        </div>
    );
};
