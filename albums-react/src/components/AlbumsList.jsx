import { useState, useEffect } from "react";

export default function AlbumList() {
    const [albums, setAlbums] = useState()
    useEffect(() => {
        fetch('https://albums-api-af.web.app/albums')
        .then(response => response.json())
        .then(setAlbums)
        .catch(alert)
    }, [])
    return(
        <main>
            <h2>Albums go here...</h2>
            {!albums
            ? <p>Loading...</p>
            : albums.map(album => (
                <div className="album" key={album.albumId}>
                    <h3>{album.album}</h3>
                    <p>{album.year}, {album.artist}</p>
                </div>
            ))
        }
        </main>
    )
}