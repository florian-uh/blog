export default function Aside() {
    return (
        <aside aria-labelledby="ressources-title">
            <section id="ressources">
                <h2 id="ressources-title">Ressources utiles</h2>
                <ul>
                    <li><a href="https://developer.mozilla.org/fr/" target="_blank" rel="noopener noreferrer" aria-label="MDN Web Docs - Documentation web (nouvelle fenêtre)">MDN Web Docs</a></li>
                    <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer" aria-label="React Docs - Documentation officielle de React (nouvelle fenêtre)">React Docs</a></li>
                    <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" aria-label="Tailwind CSS - Framework CSS utilitaire (nouvelle fenêtre)">Tailwind CSS</a></li>
                </ul>
            </section>
        </aside>
    );
}
