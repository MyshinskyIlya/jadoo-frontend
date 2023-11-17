import React from "react";

export const ContentItem = ({
    listItemTitle,
    listItemText,
    textAlignEndForH2,
}) => {
    return (
        <div className="content-list__item">
            <h2
                className="title-2 purpleText"
                style={textAlignEndForH2 === true ? { textAlign: "end" } : null}
            >
                {listItemTitle}
            </h2>
            <p>{listItemText}</p>
        </div>
    );
};
