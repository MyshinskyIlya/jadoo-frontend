import React, { useEffect, useRef } from "react";
import iconSun from "../../img/icons/NavbarIcons/sunlight.svg";
import iconMoon from "../../img/icons/NavbarIcons/night.svg";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { detectDarkMode } from "../../helpers/detectDarkMode";

export const NavbarButton = ({ setIsActive }) => {
    //Hooks
    const [darkMode, setDarkMode] = useLocalStorage(
        "darkModeIsActive",
        detectDarkMode()
    );
    const activeButton = "dark-mode-btn--active";
    const darkModeButtonRef = useRef(null);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            darkModeButtonRef.current.classList.add(activeButton);
        } else {
            document.body.classList.remove("dark");
            darkModeButtonRef.current.classList.remove(activeButton);
        }
    }, [darkMode]);

    // Handlers
    const darkmodeHandler = () => {
        setDarkMode((prev) => !prev);
        setIsActive((prev) => !prev);
    };

    // Component
    return (
        <button
            ref={darkModeButtonRef}
            className="dark-mode-btn"
            onClick={darkmodeHandler}
        >
            <img
                src={iconSun}
                alt="light mode"
                className="dark-mode-btn__icon"
            ></img>
            <img
                src={iconMoon}
                alt="dark mode"
                className="dark-mode-btn__icon"
            ></img>
        </button>
    );
};
