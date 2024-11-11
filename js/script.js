// Importamos el array películas desde el archivo `peliculas.js`
import peliculas from './peliculas.js';

// Base URL para las imágenes
const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

// Función para mostrar películas en la sección de cada género
function mostrarPeliculasPorGenero(generoId, contenedorId) {
    // Filtramos las películas que incluyen el `generoId` en su array `genre_ids`
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoId));

    // Seleccionamos el contenedor en el DOM donde vamos a mostrar las películas
    const contenedor = document.getElementById(contenedorId);

    // Creamos el contenido de las películas
    peliculasFiltradas.forEach(pelicula => {
        // Creamos un `div` para cada película
        const peliculaDiv = document.createElement('div');
        peliculaDiv.classList.add('pelicula');

        // Creamos la imagen de la película
        const imagen = document.createElement('img');
        imagen.src = `${baseImageUrl}${pelicula.poster_path}`;
        imagen.alt = pelicula.title;
        imagen.classList.add('pelicula-imagen');

        // Creamos el título de la película
        const titulo = document.createElement('h3');
        titulo.textContent = pelicula.title;
        titulo.classList.add('pelicula-titulo');

        // Añadimos la imagen y el título al `div` de la película
        peliculaDiv.appendChild(imagen);
        peliculaDiv.appendChild(titulo);

        // Añadimos el `div` de la película al contenedor correspondiente
        contenedor.appendChild(peliculaDiv);
    });
}

// Ejecutamos la función para cada género con su respectivo ID y contenedor
mostrarPeliculasPorGenero(28, 'genero-28');  // Acción
mostrarPeliculasPorGenero(53, 'genero-53');  // Thriller
mostrarPeliculasPorGenero(12, 'genero-12');  // Aventura


