import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    return (
        <header className="flex justify-between items-center p-8 bg-gray-800 text-white sticky top-0 right-0 left-0 z-10">
            <h1 className="text-3xl font-bold">Albums & Artists Collection</h1>
            <div className="flex gap-4">
                {/* Se siamo su /albums, mostriamo entrambi i bottoni per Artisti e Generi */}
                {location.pathname === '/albums' && (
                    <>
                        <Link
                            to="/artists"
                            className="text-lg bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Vedi Artisti
                        </Link>

                        <Link
                            to="/genres"
                            className="text-lg bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Vedi Generi
                        </Link>
                        <Link
                            to="/albums/create"
                            className="text-lg bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Crea Album
                        </Link>
                    </>
                )}

                {/* Se siamo su /artists o /genres, mostriamo un solo bottone di navigazione */}
                {location.pathname === '/artists' && (
                    <>
                        <Link
                            to="/albums"
                            className="text-lg bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Vedi Albums
                        </Link>
                        <Link
                            to="/genres"
                            className="text-lg bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Vedi Generi
                        </Link>
                        <Link
                            to="/artists/create"
                            className="text-lg bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Crea Artista
                        </Link>
                    </>
                )}

                {location.pathname === '/genres' && (
                    <>
                        <Link
                            to="/albums"
                            className="text-lg bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Vedi Albums
                        </Link>
                        <Link
                            to="/artists"
                            className="text-lg bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Vedi Artisti
                        </Link>
                        <Link
                            to="/genres/create"
                            className="text-lg bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Crea Genere
                        </Link>
                    </>

                )}
            </div>
        </header>
    );
}
