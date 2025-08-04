export default function Competences() {
    return (
        <section id="competences" aria-labelledby="competences-techniques-title">
            <div className="block-competence1">
                <div className="partie1">
                    <h2 id="competences-techniques-title">Mes compétences techniques :</h2>
                    <ul aria-label="Liste des compétences techniques">
                        <li><strong>HTML5</strong> — structure sémantique, accessibilité</li>
                        <li><strong>CSS3</strong> — flexbox, grid, responsive, animations</li>
                        <li><strong>JavaScript</strong> — DOM, ES6+, fetch API, modules</li>
                        <li><strong>Git / GitHub</strong> — versioning, branches, collaboration</li>
                        <li><strong>Frameworks</strong> — Tailwind CSS, React (bases)</li>
                    </ul>
                </div>

                <div className="partie2">
                    <h2 id="services-title">Si besoin :</h2>
                    <ul aria-labelledby="services-title">
                        <li>Installation OS : Windows, Linux</li>
                        <li>Initiation bureautique : Word, PowerPoint</li>
                        <li>Recherche Web</li>
                        <li>Aide CV & lettre de motivation</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
