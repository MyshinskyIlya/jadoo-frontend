import { Contacts } from "./components/Contacts/Contacts";
import { Description } from "./components/Description/Description";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Home } from "./pages/Home";
import "./styles/main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import { ProjectItemDetails } from "./components/Projects/ProjectItemDetails";
import { useEffect, useState } from "react";

function App() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        document.body.classList == "dark"
            ? setIsActive(true)
            : setIsActive(false);
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop></ScrollToTop>
            <Navbar setIsActive={setIsActive}></Navbar>
            <Routes>
                <Route
                    path="/"
                    element={<Home isActive={isActive}></Home>}
                ></Route>
                <Route
                    path="/projects"
                    element={<Projects isActive={isActive}></Projects>}
                ></Route>
                <Route
                    path="/project/:id"
                    element={<ProjectItemDetails></ProjectItemDetails>}
                ></Route>
                <Route
                    path="/description"
                    element={<Description></Description>}
                ></Route>
                <Route path="/contacts" element={<Contacts></Contacts>}></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    );
}

export default App;
