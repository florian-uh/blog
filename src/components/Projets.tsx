import ProjetCard from "./ProjetCard";

const projets = [
    {
        image: "/frontendmentor/niveau2/04-product-list-with-cart-main/preview.jpg",
        titre: "Product list with cart",
        description: "Page affichant différents produits ajoutables au panier. Bon exercice DOM.",
        lien: "/frontendmentor/niveau2/04-product-list-with-cart-main/index.html",
    },
    {
        image: "/frontendmentor/niveau2/09-news-homepage-main/design/desktop-preview.jpg",
        titre: "News Homepage",
        description: "Page d'accueil d'un site d'information tech. Pratique pour travailler grid.",
        lien: "/frontendmentor/niveau2/09-news-homepage-main/index.html",
    },
    {
        image: "/frontendmentor/niveau2/15-time-tracking-dashboard-main/preview.jpg",
        titre: "Time tracking dashboard",
        description: "Tableau de bord pour visualiser son temps passé sur différentes activités.",
        lien: "/frontendmentor/niveau2/15-time-tracking-dashboard-main/index.html",
    },
];

export default function Projets() {
    return (
        <section id="projets">
            <h2>Quelques réalisations</h2>
            <div className="cartes">
                {projets.map((p, i) => (
                    <ProjetCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}
