type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className="pagination" aria-label="Pagination des articles">
            <ul>
                {pages.map((page) => (
                    <li key={page}>
                        <button
                            className={page === currentPage ? "active" : ""}
                            onClick={() => onPageChange(page)}
                            aria-current={page === currentPage ? "page" : undefined}
                            aria-label={`Page ${page}${page === currentPage ? ", page actuelle" : ""}`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
