import { useState } from "react";
import ArticleCard from "./ArticlesCard";
import Pagination from "./Pagination";

const articles = [
    {
        titre: "Découverte de React",
        date: "Mars 2025",
        resume: "Petit guide pour comprendre la philosophie des composants et du state en React.",
        lien: "#",
    },
    {
        titre: "10 astuces CSS pour un site plus moderne",
        date: "Février 2025",
        resume: "Flexbox, grid, variables CSS… améliorez rapidement vos interfaces.",
        lien: "#",
    },
    {
        titre: "Gérer son code avec Git et GitHub",
        date: "Janvier 2025",
        resume: "Comment organiser son dépôt et collaborer efficacement.",
        lien: "#",
    },
    {
        titre: "Améliorer ses performances en JavaScript",
        date: "Décembre 2024",
        resume: "Quelques optimisations simples pour accélérer vos sites.",
        lien: "#",
    },
    {
        titre: "Créer une page web accessible",
        date: "Novembre 2024",
        resume: "Balises sémantiques, ARIA, contrastes : tout ce qu’il faut pour être inclusif.",
        lien: "#",
    },
    {
        titre: "Mes ressources préférées pour apprendre le dev",
        date: "Octobre 2024",
        resume: "Sites, chaînes YouTube et exercices pratiques pour progresser rapidement.",
        lien: "#",
    },
];

export default function Articles() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const articlesPerPage = 3;

    const totalPages = Math.ceil(articles.length / articlesPerPage);
    const startIndex = (currentPage - 1) * articlesPerPage;
    const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);

    return (
        <section id="articles">
            <h2>Mes articles</h2>
            <div className="articles-list">
                {currentArticles.map((article, i) => (
                    <ArticleCard key={i} {...article} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </section>
    );
}
