import { Link } from "react-router-dom";

export default function HomePage(): JSX.Element {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Mon Blog</h1>
            <ul>
                <li>
                    <Link to="/article/hello-world">Hello World</Link>
                </li>
            </ul>
        </div>
    );
}

