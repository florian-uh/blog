export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer role="contentinfo" aria-label="Informations sur le site">
            <p>
                <span aria-label={`Copyright ${currentYear} Flo-uh`}>© {currentYear} Flo-uh</span> — Tous droits réservés
            </p>
            <p>
                Développé avec <span aria-label="amour" role="img">❤️</span> et React + TypeScript
            </p>
        </footer>
    );
}
