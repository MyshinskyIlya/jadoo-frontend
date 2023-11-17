import React, { useState } from "react";

import { InView } from "react-intersection-observer";
import { Container } from "../../UI/Container/Container";
import { DescriptionText } from "./DescriptionText";
import { DescriptionTitle } from "./DescriptionTitle";
import "../../styles/DescriptionStyles/Description.css";

export const Description = () => {
    const [isObser, seIsObser] = useState(true);

    return (
        <InView
            as="div"
            onChange={(InView, entry) => {
                seIsObser(InView);
            }}
            className="content-section"
        >
            <Container>
                <div className="description">
                    <DescriptionTitle></DescriptionTitle>
                    <DescriptionText isObser={isObser}></DescriptionText>
                </div>
            </Container>
        </InView>
    );
};
