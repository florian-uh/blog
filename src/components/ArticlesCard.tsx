type ArticleCardProps = {
    titre: string;
    date: string;
    resume: string;
    lien: string;
};

export default function ArticleCard({ titre, date, resume, lien }: ArticleCardProps) {
    return (
        <article className="article-card">
            <h3>{titre}</h3>
            <p className="date">{date}</p>
            <p>{resume}</p>
            <a href={lien} className="btn-lire">Lire l'article →</a>
        </article>
    );
}
