import React from "react";
import { ContactItem } from "./ContactItem";

export const ContactList = () => {
    const contactList = [
        {
            contactTitle: "Location",
            contactText: "London, England",
        },
        {
            contactTitle: "Telegram / WhatsApp",
            contactLink: "tel:+79051234567",
            contactLinkText: "+7 (905) 123-45-67",
        },
        {
            contactTitle: "Email",
            contactLink: "example@gmail.com",
            contactLinkText: "example@gmail.com",
        },
    ];
    return (
        <div>
            <div className="content-list">
                {contactList.map((contact) => (
                    <ContactItem
                        key={contact.contactTitle}
                        contactTitle={contact.contactTitle}
                        contactText={contact.contactText}
                        contactLink={contact.contactLink}
                        contactLinkText={contact.contactLinkText}
                    ></ContactItem>
                ))}
            </div>
        </div>
    );
};
