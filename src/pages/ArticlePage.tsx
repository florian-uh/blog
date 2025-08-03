import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ArticlePage(): JSX.Element {
    const { slug } = useParams<{ slug: string }>();  // typage du paramètre
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (!slug) return; // sécurité
        fetch(`/posts/${slug}.md`)
            .then(res => res.text())
            .then(setContent)
            .catch(err => console.error("Erreur chargement article :", err));
    }, [slug]);

    return (
        <div className="prose mx-auto p-4">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}
