import React from "react";
import "../styles/frontendmentor.css";

const projects = [
    {
        title: "NFT Preview Card",
        url: "https://florian-uh.github.io/frontendmentor/nft-preview-card/index.html",
        reactUrl: "/demos/nft-preview-card", // quand tu l'auras converti en React
        level: "Niveau 1",
    },
    {
        title: "Time Tracking Dashboard",
        url: "https://florian-uh.github.io/frontendmentor/niveau2/15-time-tracking-dashboard-main/index.html",
        reactUrl: "/demos/time-tracking-dashboard",
        level: "Niveau 2",
    }
];

const FrontendMentor: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Projets Frontend Mentor</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <li key={index} className="border p-4 rounded-xl shadow bg-white">
                        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                        <p className="text-gray-500">{project.level}</p>
                        <div className="mt-4 flex gap-2">
                            <a
                                href={project.url}
                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Version HTML
                            </a>
                            {project.reactUrl && (
                                <a
                                    href={project.reactUrl}
                                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Version React
                                </a>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FrontendMentor;
