type ProjetCardProps = {
    image: string;
    titre: string;
    description: string;
    lien: string;
};

export default function ProjetCard({ image, titre, description, lien }: ProjetCardProps) {
    return (
        <article className="carte">
            <a href={lien} target="_blank" rel="noopener noreferrer">
                <figure>
                    <img src={image} alt={titre} />
                    <figcaption>{titre}</figcaption>
                </figure>
            </a>
            <div className="contenu">
                <h2>{titre}</h2>
                <p>{description}</p>
            </div>
        </article>
    );
}
