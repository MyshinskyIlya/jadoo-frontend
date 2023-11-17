import React from "react";
import pico from "../../img/icons/ProjectsIcon/pico.png";
import { projectsArray } from "../../helpers/Projects";

import { Link, useParams } from "react-router-dom";

export const ProjectItemDetails = () => {
    const { id } = useParams();

    return projectsArray.map((project) => {
        if (id === project.id) {
            return (
                <div key={project.id} className="project-section">
                    <div className="container">
                        <div className="project-details">
                            <h1 className="title-1">{project.title}</h1>
                            <img
                                src={project.img}
                                alt="Pic"
                                className="project-details__cover"
                            />
                            <div className="project-details__desc">
                                <p>{project.description}</p>
                            </div>
                            <div>
                                <Link
                                    to="/projects"
                                    style={{ padding: "2rem 3rem" }}
                                    className="btn-outline"
                                >
                                    <img src={pico} alt="pico" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });
};
