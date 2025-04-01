import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SingleAlbumPage() {
    const base_api_url = import.meta.env.VITE_EXPRESS_API_SERVER
    const albums_api_url = base_api_url + '/albums'
    const { id } = useParams();
    const [album, setAlbum] = useState(null);

    useEffect(() => {

        const fetchAlbum = async () => {
            try {
                const response = await fetch(`${albums_api_url}/${id}`);
                const data = await response.json();
                setAlbum(data);
            } catch (error) {
                console.error("Errore nel recuperare l'album:", error);
            }
        };

        fetchAlbum();
    }, [id]);

    if (!album) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <Link to="/albums" className="text-lg bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                Back to Album List
            </Link>
            <div className="bg-white p-8 mt-9 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">{album.nome}</h1>
                <img
                    src={album.foto}
                    alt={album.nome}
                    className="w-full h-screen object-cover rounded-xl mb-6"
                />
                <div className="text-2xl text-gray-600 mb-4">
                    <p><strong>Artista:</strong> {album.artista ? album.artista.alias : "Unknown Artist"}</p>
                    <p><strong>Pubblicato il:</strong> {new Date(album.dataPubblicazione).toLocaleDateString()}</p>
                    <p><strong>Tracce:</strong> {album.tracce}</p>
                    <p className="mt-4"><strong>Descrizione:</strong> {album.descrizione}</p>
                    <p className="text-gray-600 mt-4"><strong>Generi:</strong> {album.generi.map((genere) => genere.nome).join(', ')}</p>
                </div>
            </div>
        </div>
    );
}
