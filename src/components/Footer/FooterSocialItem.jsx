import React from "react";

export const FooterSocialItem = ({ socialLink, socialImg }) => {
    return (
        <div className="social__item">
            <a href={socialLink}>
                <img src={socialImg} alt="Link"></img>
            </a>
        </div>
    );
};
