import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    return (
        <header className="flex justify-between items-center p-8 bg-gray-800 text-white sticky top-0 right-0 left-0 z-10">
            <h1 className="text-3xl font-bold">Albums & Artists Collection</h1>
            <div className="flex gap-4">
                <Link
                    to={location.pathname === '/albums' ? '/artists' : '/albums'}
                    className="text-lg bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    {location.pathname === '/albums' ? 'Vedi Artisti' : 'Vedi Albums'}
                </Link>

                {location.pathname === '/albums' && (
                    <Link
                        to="/albums/create"
                        className="text-lg bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                    >
                        Crea Album
                    </Link>
                )}

                {location.pathname === '/artists' && (
                    <Link
                        to="/artists/create"
                        className="text-lg bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                    >
                        Crea Artista
                    </Link>
                )}
            </div>
        </header>
    );
}
