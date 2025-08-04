type HeaderProps = {
    darkMode: boolean;
    toggleDark: () => void;
};

export default function Header({ darkMode, toggleDark }: HeaderProps) {
    return (
        <header>
            <div className="top-header">
                <div className="logo">
                    <img src="/assets/logo.png" alt="Logo Flo-uh" width={48} height={48} />
                </div>
                <h1>Le p'tit dev</h1>
                <button
                    id="toggle-dark-mode"
                    onClick={toggleDark}
                    aria-pressed={darkMode}
                    aria-label="Activer le mode sombre"
                >
                    {darkMode ? "🌙 Mode clair" : "🌑 Mode sombre"}
                </button>
            </div>

            <nav id="navbar" aria-label="Navigation principale">
                <ul>
                    <li><a href="#competences" aria-label="Aller à la section compétences">Compétences</a></li>
                    <li><a href="#projets" aria-label="Aller à la section projets">Projets</a></li>
                    <li><a href="#articles" aria-label="Aller à la section articles">Articles</a></li>
                    <li><a href="#ressources" aria-label="Aller à la section ressources">Ressources</a></li>
                </ul>
            </nav>
        </header>
    );
}
