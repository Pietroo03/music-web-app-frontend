import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function AlbumsPage() {

    const base_api_url = import.meta.env.VITE_EXPRESS_API_SERVER
    const albums_api_url = base_api_url + '/albums'
    const [albums, setAlbums] = useState([])

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
                setAlbums(data);

            }).catch(err => console.log(err))
    }, [])


    return (
        <div className="min-h-screen bg-gray-100 pt-4 p-14">
            <h1 className="text-3xl font-bold text-center mb-10">Album Collection</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {albums && albums.map((album) => (
                    <Link to={`/albums/${album.id}`} key={album.id} className="bg-white p-3 rounded-2xl shadow-lg hover:shadow-2xl transition duration-200 h-full">
                        <img
                            src={album.foto}
                            alt={album.nome}
                            className="w-full h-48 object-cover rounded-xl mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-600">{album.nome}</h2>
                        <p className="text-lg text-gray-600">Artista: {album.artista && album.artista.alias ? album.artista.alias : "Unknown Artist"}</p>
                        <p className="text-lg text-gray-600">Pubblicato il: {new Date(album.dataPubblicazione).toLocaleDateString()}</p>
                        <p className="text-lg text-gray-600">Tracce: {album.tracce}</p>

                        <p className="text-xl text-gray-500 text-sm mt-2 h-40 overflow-y-auto">
                            {album.descrizione}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );

}