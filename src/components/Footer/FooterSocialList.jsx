import React from "react";
import twitter from "../../img/icons/FooterIcons/twitter.svg";
import vk from "../../img/icons/FooterIcons/vk.png";
import instagram from "../../img/icons/FooterIcons/instagram.png";
import facebook from "../../img/icons/FooterIcons/facebook.png";
import { FooterSocialItem } from "./FooterSocialItem";

export const FooterSocialList = () => {
    const socialItems = [
        {
            socialImg: vk,
            socialLink: "#",
        },
        {
            socialImg: instagram,
            socialLink: "#",
        },
        {
            socialImg: twitter,
            socialLink: "#",
        },
        {
            socialImg: facebook,
            socialLink: "#",
        },
    ];
    return (
        <div className="social">
            {socialItems.map((item) => (
                <FooterSocialItem
                    key={item.socialImg}
                    socialLink={item.socialLink}
                    socialImg={item.socialImg}
                ></FooterSocialItem>
            ))}
        </div>
    );
};
