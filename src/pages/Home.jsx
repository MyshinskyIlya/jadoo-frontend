import React, { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { Content } from "../components/Content/Content";
import { Projects } from "../components/Projects/Projects";
import { Description } from "../components/Description/Description";
import { Contacts } from "../components/Contacts/Contacts";

export const Home = ({ isActive }) => {
    const [header, setHeader] = useState([1]);
    useEffect(() => {
        setHeader((prev) => [+prev + 1]);
    }, [isActive]);

    return (
        <div>
            {header.map((i) => (
                <Header key={i}></Header>
            ))}
            <Content></Content>
        </div>
    );
};
