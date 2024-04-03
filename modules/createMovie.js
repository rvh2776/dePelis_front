import axios from 'axios';
import { alertDescription, alertDirector, alertDuration, alertGenre, alertImage, alertRate, alertTitle, alertYear } from './createMovieAlert';
import { limpiarFormMovie } from './limpiarFormMovie';

const createMovie = () => {
    
    const nuevaTarjeta = document.getElementById('tarjeta');
    const limpiar = document.getElementById('botonLimpiar');
    const agregar = document.getElementById('botonAgregar');

    const title = document.getElementById('title');
    const director = document.getElementById('director');
    const year = document.getElementById('estreno');
    const duration = document.getElementById('duracion');
    const genre = document.getElementById('genero');
    const rate = document.getElementById('puntuacion');
    const description = document.getElementById('descripcion');
    const urlImagen = document.getElementById('urlImagen');

//? Creo la tarjeta dinamicamente con los datos que recibidos.

    const card = document.createElement('div');
    card.className = 'd-flex justify-content-center';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card my-1 mx-2 contenedor';
    cardDiv.style.maxWidth = '65rem';

    const divRow = document.createElement('div');
    divRow.className = 'row g-0';

    const divRow4 = document.createElement('div');
    divRow4.className = 'col-md-4';

    const nuevaImagen = document.createElement('img');
    nuevaImagen.className = 'img-fluid rounded-start py-2 px-2';
    nuevaImagen.src = 'https://c8.alamy.com/compes/fnj661/fotograma-de-pelicula-de-35-mm-con-copia-espacio-o-utilizar-como-capa-fnj661.jpg';
    nuevaImagen.alt = `Poster de la película: ${title.value}`;
    nuevaImagen.title = title.value;

    const divRow8 = document.createElement('div');
    divRow8.className = 'col-md-8';

    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';

    const titulo = document.createElement('h2');
    titulo.className = 'card-title text-left mt-1';
    titulo.textContent = `Título: ${title.value}`;

    const hr1 = document.createElement('hr');
    hr1.className = 'my-2';

    const direccion = document.createElement('h3');
    direccion.className = 'card-text ms-2';
    direccion.textContent = `Director: ${director.value}`;

    const estreno = document.createElement('h5');
    estreno.className = 'card-text ms-2';
    estreno.textContent = `Año: ${year.value}`;

    const duracion = document.createElement('h5');
    duracion.className = 'card-text ms-2';
    duracion.textContent = `Duración: ${duration.value}`;

    const genero = document.createElement('h5');
    genero.className = 'card-text ms-2';
    genero.textContent = `Género: ${genre.value}`;

    const puntuacion = document.createElement('h5');
    puntuacion.className = 'card-text ms-2';
    puntuacion.textContent = `Puntuación: ${rate.value}`;

    const hr2 = document.createElement('hr');
    hr2.className = 'my-2';

    const sinopsis = document.createElement('h3');
    sinopsis.className = 'card-text ms-2 text-center';
    sinopsis.textContent = 'Sinopsis';

    const descripcion = document.createElement('h5');
    descripcion.className = 'card-text ms-2 text-center text-body-secondary';
    descripcion.textContent = description.value;

    nuevaTarjeta.appendChild(card);
    card.appendChild(cardDiv);
    cardDiv.appendChild(divRow);
    divRow.appendChild(divRow4);
    divRow4.appendChild(nuevaImagen);
    divRow.appendChild(divRow8);
    divRow8.appendChild(divCardBody);
    divCardBody.appendChild(titulo);
    divCardBody.appendChild(hr1);
    divCardBody.appendChild(direccion);
    divCardBody.appendChild(estreno);
    divCardBody.appendChild(duracion);
    divCardBody.appendChild(genero);
    divCardBody.appendChild(puntuacion);
    divCardBody.appendChild(hr2);
    divCardBody.appendChild(sinopsis);
    divCardBody.appendChild(descripcion);

    alertImage(urlImagen, nuevaImagen, title);
    alertTitle(title, titulo);
    alertDirector(director, direccion);
    alertYear(estreno, year);
    alertDuration(duracion, duration);
    alertGenre(genero, genre);
    alertRate(puntuacion, rate);
    alertDescription(descripcion, description);

    limpiar.addEventListener('click', () => {

        limpiarFormMovie(nuevaImagen, titulo, title, direccion, year, estreno, duration, duracion, genre, genero, rate, puntuacion, descripcion, description);
    });

    agregar.addEventListener('click', () => {

        const generos = document.getElementById('genero').value.split(',').map(genre => genre.trim());
        const rateNum = parseFloat(rate.value);

        if (!title.value || !year.value || !director.value || !duration.value || !generos || !rateNum || !urlImagen.value || !description.value) {
            alert('Todos los campos son obligatorios');
            return;
        }

        const newMovie = {
            title: title.value,
            year: year.value,
            director: director.value,
            duration: duration.value,
            genre: generos,
            rate: rateNum,
            poster: urlImagen.value,
            description: description.value,
        };
        
        const envio = async () => {

            await axios.post('http://localhost:3001/movies', newMovie)
                
                .then(response => {
                    alert(`La nueva pelicula: ${newMovie.title}, fue agregada con exito!`);
                    window.location.href = '../index.html'
                })
                .catch(error => {
                    
                    document.getElementById('title').value = newMovie.title;
                    document.getElementById('director').value = newMovie.director;
                    document.getElementById('estreno').value = newMovie.year;
                    document.getElementById('duracion').value = newMovie.duration;
                    document.getElementById('genero').value = newMovie.genre;
                    document.getElementById('puntuacion').value = newMovie.rate;
                    document.getElementById('descripcion').value = newMovie.description;
                    document.getElementById('urlImagen').value = newMovie.poster;

                    titulo.textContent = `Título: ${newMovie.title}`;
                    direccion.textContent = `Director: ${newMovie.director}`;
                    estreno.textContent = `Año: ${newMovie.year}`;
                    duracion.textContent = `Duración: ${newMovie.duration}`;
                    genero.textContent = `Género: ${newMovie.genre}`;
                    puntuacion.textContent = `Puntuación: ${newMovie.rate}`;
                    descripcion.textContent = newMovie.description;
                    nuevaImagen.src = newMovie.poster;

                    alert(error.response.data.error)
                });
            return;    
        };

        envio();
        limpiarFormMovie(nuevaImagen, titulo, title, direccion, year, estreno, duration, duracion, genre, genero, rate, puntuacion, descripcion, description);
    });
};

createMovie();

export {
    createMovie,
}

