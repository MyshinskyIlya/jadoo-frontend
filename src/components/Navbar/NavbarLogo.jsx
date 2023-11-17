import React from "react";
import { Link } from "react-router-dom";

export const NavbarLogo = () => {
    return (
        <Link to="/" className="logo">
            <div className="logoType">
                <strong>
                    <i>JADOO</i>
                </strong>
                <span className="purpleText">Design</span>
            </div>
        </Link>
    );
};
