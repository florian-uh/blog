type ProjetCardProps = {
    image: string;
    titre: string;
    description: string;
    lien: string;
};

export default function ProjetCard({ image, titre, description, lien }: ProjetCardProps) {
    return (
        <article className="carte">
            <h2 id={`projet-${titre.toLowerCase().replace(/\s+/g, '-')}`}>{titre}</h2>
            <a 
                href={lien} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-describedby={`projet-${titre.toLowerCase().replace(/\s+/g, '-')}-desc`}
                aria-label={`Voir le projet ${titre}`}
            >
                <figure>
                    <img src={image} alt={`Aperçu du projet ${titre}`} />
                    <figcaption>Aperçu</figcaption>
                </figure>
            </a>
            <div className="contenu">
                <p id={`projet-${titre.toLowerCase().replace(/\s+/g, '-')}-desc`}>{description}</p>
            </div>
        </article>
    );
}
