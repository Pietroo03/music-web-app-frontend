import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function ArtistsPage() {

    const base_api_url = import.meta.env.VITE_EXPRESS_API_SERVER
    const albums_api_url = base_api_url + '/artists'
    const [artists, setArtists] = useState([])

    useEffect(() => {

        //make a fetch request to the base api endpoint

        fetch(albums_api_url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setArtists(data);

            }).catch(err => console.log(err))
    }, [])


    return (
        <div className="min-h-screen bg-gray-100 pt-4 p-6 flex justify-center">
            <div className="container max-w-6xl">
                <h1 className="text-5xl font-bold text-center mb-10">Artist Collection</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {artists && artists.map((artist) => (
                        <Link to={`/artists/${artist.id}`} key={artist.id} className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 h-full block text-center">
                            <img
                                src={artist.foto}
                                alt={artist.alias}
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <h2 className="text-xl font-bold text-gray-600">{artist.alias}</h2>
                            <p className="text-lg text-gray-600"><strong>Nome:</strong> {artist.nome} {artist.cognome}</p>
                            <p className="text-lg text-gray-600"><strong>Data di Nascita:</strong> {new Date(artist.dataNascita).toLocaleDateString()}</p>
                            <p className="text-lg text-gray-600"><strong>Etichetta:</strong> {artist.etichetta}</p>

                            <p className="text-gray-500 text-xl mt-5 h-40 overflow-y-auto">
                                {artist.descrizione}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>


    );

}