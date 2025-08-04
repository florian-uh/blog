import { useState, useEffect } from "react";
import Header from "./components/Header";
import Competences from "./components/Competences";
import Projets from "./components/Projets";
import Articles from "./components/Articles";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const saved = localStorage.getItem("darkMode") === "true";
        setDarkMode(saved);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

    return (
        <>
            <Header darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />

            <main role="main" aria-label="Contenu principal">
                <Competences />
                <Projets />
                <Articles />
                <Aside />
            </main>
            <Footer />
        </>
    );
}

