import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold">Albums & Artists Collection</h1>
            <Link
                to={location.pathname === '/albums' ? '/artists' : '/albums'}
                className="text-lg bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
                {location.pathname === '/albums' ? 'Vedi Artisti' : 'Vedi Albums'}
            </Link>
        </header>
    );
}
