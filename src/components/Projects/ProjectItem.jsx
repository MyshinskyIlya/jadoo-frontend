import React, { useRef } from "react";
import "../../styles/ProjectsStyles/Projects.css";

import { NavLink } from "react-router-dom";

export const ProjectItem = ({ title, img, id }) => {
    return (
        <NavLink to={`/project/${id}`} className="project">
            <img src={img} alt="Project img" className="project__img"></img>
            <h3 className="project__title">{title}</h3>
        </NavLink>
    );
};
