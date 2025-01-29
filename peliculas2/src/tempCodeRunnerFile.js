import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function Pelicula ({movie}) {
    const [imagenSrc, setImagenSrc] = useState("");

    useEffect(() => {
        const aplicarImagen = () => {
            switch (movie.titulo) {
                case "Volver al futuro": setImagenSrc("backtothefuture.webp"); break;
                case "Dune": setImagenSrc("dune.jpg"); break;
                case "El Padrino": setImagenSrc("elpadrino.webp"); break;
                case "La Historia Interminable": setImagenSrc("historia_interminable.png"); break;
                case "It": setImagenSrc("it.jpg"); break;
                case "La Profecía": setImagenSrc("la_profec_a_poster.png"); break;
                case "Seven": setImagenSrc("seven.jpg"); break;
                case "El Silencio de los Corderos": setImagenSrc("the-silence-of-the-lambs-md-web.jpg"); break;
                default:
                    setImagenSrc();
            }
        }

        aplicarImagen();
    }, [])

    return (
        <Card>
            <img src={imagenSrc} width={'200px'} alt="moviePicture" className="md-3"/>
        </Card>
    )
}

// Add a new component to wrap the Pelicula components in a flex container
function PeliculasList({ movies }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {movies.map(movie => (
                <Pelicula key={movie.titulo} movie={movie} />
            ))}
        </div>
    );
}

export default Pelicula;
export { PeliculasList };