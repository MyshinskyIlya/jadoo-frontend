import React from "react";
import { NavbarLink } from "./NavbarLink";

export const NavbarLinks = () => {
    const links = [
        { id: 1, linkName: "Home", linkAdress: "/" },
        { id: 2, linkName: "Projects", linkAdress: "/projects" },
        { id: 4, linkName: "Description", linkAdress: "/description" },
        { id: 3, linkName: "Contacts", linkAdress: "/contacts" },
    ];
    return (
        <div className="nav-list">
            {links.map((link) => (
                <NavbarLink
                    key={link.id}
                    linkName={link.linkName}
                    linkAdress={link.linkAdress}
                    active={"nav-list__link--active"}
                ></NavbarLink>
            ))}
        </div>
    );
};
