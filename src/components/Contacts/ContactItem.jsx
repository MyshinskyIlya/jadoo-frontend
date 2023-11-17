import React from "react";

export const ContactItem = ({
    contactTitle,
    contactText,
    contactLink,
    contactLinkText,
}) => {
    return (
        <div className="content-list__item">
            <h2 className="title-2">{contactTitle}</h2>
            {contactText ? (
                <p className="purpleText">{contactText}</p>
            ) : (
                <p>
                    <a className="purpleText" href={contactLink}>
                        {contactLinkText}
                    </a>
                </p>
            )}
        </div>
    );
};
