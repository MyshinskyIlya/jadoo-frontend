import React from "react";
import { NavLink } from "react-router-dom";

export const NavbarLink = ({ linkAdress, linkName }) => {
    return (
        <div className="nav-list__item">
            <NavLink
                to={linkAdress}
                className={({ isActive }) =>
                    isActive
                        ? "nav-list__link nav-list__link--active"
                        : "nav-list__link"
                }
            >
                {linkName}
            </NavLink>
        </div>
    );
};
