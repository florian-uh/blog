type ArticleCardProps = {
    titre: string;
    date: string;
    resume: string;
    lien: string;
};

export default function ArticleCard({ titre, date, resume, lien }: ArticleCardProps) {
    const articleId = `article-${titre.toLowerCase().replace(/\s+/g, '-')}`;
    return (
        <article className="article-card" aria-labelledby={articleId}>
            <h3 id={articleId}>{titre}</h3>
            <p className="date"><time>{date}</time></p>
            <p id={`${articleId}-resume`}>{resume}</p>
            <a 
                href={lien} 
                className="btn-lire" 
                aria-describedby={`${articleId}-resume`}
                aria-label={`Lire l'article : ${titre}`}
            >
                Lire l'article <span aria-hidden="true">→</span>
            </a>
        </article>
    );
}
