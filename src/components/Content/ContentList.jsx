import React from "react";
import { ContentItem } from "./ContentItem";

export const ContentList = () => {
    const listItems = [
        {
            id: 1,
            listItemTitle: "Frontend",
            listItemText:
                "JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents",
        },
        {
            id: 2,
            listItemTitle: "Backend",
            listItemText:
                "NodeJS, MySQL, MongoDB, PHP, Laravel Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse optio ab, nobis delectus corrupti cumque? Deleniti nostrum quos, dignissimos voluptatem autem delectus et quaerat enim, ratione facere sed consequuntur porro!",
            individualCssStyle: true,
        },
    ];
    return (
        <div>
            <h1 className="title-1">My skills</h1>
            <div className="content-list">
                {listItems.map((item) => (
                    <ContentItem
                        key={item.id}
                        listItemTitle={item.listItemTitle}
                        listItemText={item.listItemText}
                        textAlignEndForH2={item.individualCssStyle}
                    ></ContentItem>
                ))}
            </div>
        </div>
    );
};
