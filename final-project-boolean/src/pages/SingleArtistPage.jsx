import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SingleArtistPage() {
    const base_api_url = import.meta.env.VITE_EXPRESS_API_SERVER
    const albums_api_url = base_api_url + '/artists'
    const { id } = useParams();
    const [artista, setArtista] = useState(null);

    useEffect(() => {

        const fetchArtist = async () => {
            try {
                const response = await fetch(`${albums_api_url}/${id}`);
                const data = await response.json();
                setArtista(data);
            } catch (error) {
                console.error("Errore nel recuperare l'artista:", error);
            }
        };

        fetchArtist();
    }, [id]);

    if (!artista) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
            <div className="max-w-3xl w-full flex flex-col items-center">
                <Link to="/artists" className="text-lg bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-6">
                    Back to Artists List
                </Link>
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full text-center">
                    <h1 className="text-3xl font-bold text-center mb-6">{artista.alias}</h1>
                    <img
                        src={artista.foto}
                        alt={artista.nome}
                        className="w-full h-100 object-cover rounded-xl mb-6"
                    />
                    <div className="text-2xl text-gray-600 mb-4">
                        <p className="text-gray-600"><strong>Nome:</strong> {artista.nome} {artista.cognome}</p>
                        <p className="text-gray-600"><strong>Data di Nascita:</strong> {new Date(artista.dataNascita).toLocaleDateString()}</p>
                        <p className="text-gray-600"><strong>Etichetta:</strong> {artista.etichetta}</p>
                        <p className="text-gray-600 mt-4"><strong>Descrizione:</strong> {artista.descrizione}</p>
                        <p className="text-gray-600 mt-4"><strong>Generi:</strong> {artista.generi.map((genere) => genere.nome).join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
