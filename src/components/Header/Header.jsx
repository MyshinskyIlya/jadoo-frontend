import React, { useCallback, useEffect, useState } from "react";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderText } from "./HeaderText";
import "../../styles/HeaderStyles/Header.css";
import { HeaderButton } from "../../UI/Buttons/HeaderButton";

export const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <HeaderTitle></HeaderTitle>
                <HeaderText></HeaderText>
                <HeaderButton>Download CV</HeaderButton>
            </div>
        </header>
    );
};
