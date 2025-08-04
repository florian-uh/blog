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
                    <li><a href="#competences">Front end mentor</a></li>
                    <li><a href="#projets">Odin's project</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#ressources">Ressources</a></li>
                </ul>
            </nav>
        </header>
    );
}
