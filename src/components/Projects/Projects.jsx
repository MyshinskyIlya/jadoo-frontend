import React from "react";

import "../../styles/ProjectsStyles/Projects.css";
import { ProjectsList } from "./ProjectsList";
import { ProjectsVideoBg } from "../../UI/VideoBackground/ProjectsVideoBg";

export const Projects = ({ isActive }) => {
    return (
        <div className="content-section">
            <ProjectsVideoBg isActive={isActive}>
                <div className="projects__container">
                    <h2 className="title-1" style={{ color: "white" }}>
                        My projects
                    </h2>
                    <ProjectsList></ProjectsList>
                </div>
            </ProjectsVideoBg>
        </div>
    );
};
