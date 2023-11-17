import React, { useEffect, useState } from "react";
import "../../styles/ProjectsStyles/Projects.css";
import nightVideo from "../../video/ProjectsBackgroundNightVideo.mp4";
import lightVideo from "../../video/ProjectsBackgroundLightVideo.mp4";

export const ProjectsVideoBg = ({ isActive, children }) => {
    const [video, setVideo] = useState([{ video: nightVideo }]);

    useEffect(() => {
        isActive
            ? setVideo([{ video: nightVideo }])
            : setVideo([{ video: lightVideo }]);
    }, [isActive]);

    return (
        <div className="intro">
            {video.map((item) => (
                <video
                    key={item.video}
                    className="video__bg"
                    autoPlay
                    muted
                    loop
                >
                    <source src={item.video} type="video/mp4" />
                </video>
            ))}

            <div className="video__content">{children}</div>
        </div>
    );
};
