import React from "react";
import { ProjectItem } from "./ProjectItem";
import { projectsArray } from "../../helpers/Projects";

export const ProjectsList = () => {
    return (
        <div className="projects">
            {projectsArray.map((card) => (
                <ProjectItem
                    key={card.title}
                    id={card.id}
                    title={card.title}
                    img={card.img}
                ></ProjectItem>
            ))}
        </div>
    );
};
