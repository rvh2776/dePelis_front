
//? Recibo por parametros URL el ID de la pelicula elegida.

document.addEventListener('DOMContentLoaded', function () {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const peliculaId = urlParams.get('id');

    const pelicula = axios.get(`http://localhost:3001/movies/${peliculaId}`);

        pelicula
        .then((resp) => {
        
        const title = resp.data.title;
        const year = resp.data.year;
        const director = resp.data.director;
        const duration = resp.data.duration;
        const genre = resp.data.genre;
        const rate = resp.data.rate;
        const poster = resp.data.poster;
        const description = resp.data.description;

    //? Creo la tarjeta dinamicamente con los datos que recibidos.

        const nuevaTarjeta = document.getElementById('tarjeta');

        const card = document.createElement('div');
        card.className = 'd-flex justify-content-center';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card mb-3 contenedor';
        cardDiv.style.maxWidth = '65rem';

        const divRow = document.createElement('div');
        divRow.className = 'row g-0';

        const divRow4 = document.createElement('div');
        divRow4.className = 'col-md-4';

        const nuevaImagen = document.createElement('img');
        nuevaImagen.className = 'img-fluid rounded-start py-2 px-2';
        nuevaImagen.src = poster;
        nuevaImagen.alt = `Poster de la película: ${title}`;
        nuevaImagen.title = title;

        const divRow8 = document.createElement('div');
        divRow8.className = 'col-md-8';

        const divCardBody = document.createElement('div');
        divCardBody.className = 'card-body';

        const titulo = document.createElement('h2');
        titulo.className = 'card-title text-center mt-1';
        titulo.textContent = `Título: ${title}`;

        const hr1 = document.createElement('hr');
        hr1.className = 'my-2';

        const direccion = document.createElement('h3');
        direccion.className = 'card-text ms-2';
        direccion.textContent = `Director: ${director}`;

        const estreno = document.createElement('h4');
        estreno.className = 'card-text ms-2';
        estreno.textContent = `Año: ${year}`;

        const duracion = document.createElement('h5');
        duracion.className = 'card-text ms-2';
        duracion.textContent = `Duración: ${duration}`;

        const genero = document.createElement('h5');
        genero.className = 'card-text ms-2';
        genero.textContent = `Género: ${genre}`;

        const puntuacion = document.createElement('h5');
        puntuacion.className = 'card-text ms-2';
        puntuacion.textContent = `Puntuación: ${rate}`;

        const btnContainer = document.createElement('div');
        btnContainer.className = 'd-flex justify-content-between';

        const btnVolver = document.createElement('button');
        btnVolver.className = 'btn btn-outline-secondary mt-3 mb-0';
        btnVolver.textContent = 'Volver';

        btnVolver.addEventListener('click', () => {
            history.back();
        });

        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'btn btn-outline-danger mt-3 mb-0';
        btnEliminar.textContent = 'Eliminar';

        btnEliminar.addEventListener('click', (value) => {

            const eleccion = confirm(`Estás seguro que deseas eliminar la película\n"${title}"`)

            if (value.target.textContent === 'Eliminar') {
                
                if (eleccion) {

                    const eliminar = axios.delete(`http://localhost:3001/movies/${peliculaId}`);

                    eliminar
                    .then((resp) => {
                        alert(`La película: ${title} fue eliminada con éxito`);
                        window.location.href = '../index.html';
                        return;
                    })
                    .catch((error) => {
                        alert('Error al eliminar la película:',error.message);
                    });

                    console.log('El usuario confirmo la eliminacion');
                }else{
                    console.log('El usuario cancelo la eliminacion');
                }
            };
        });

        const hr2 = document.createElement('hr');
        hr2.className = 'my-2';

        const sinopsis = document.createElement('h3');
        sinopsis.className = 'card-text ms-2 text-center';
        sinopsis.textContent = 'Sinopsis';

        const descripcion = document.createElement('h5');
        descripcion.className = 'card-text ms-2 text-center text-body-secondary';
        descripcion.textContent = description;

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
        divCardBody.appendChild(btnContainer);
        btnContainer.appendChild(btnVolver);
        btnContainer.appendChild(btnEliminar);
        divCardBody.appendChild(hr2);
        divCardBody.appendChild(sinopsis);
        divCardBody.appendChild(descripcion);
                
        return;
    })
    .catch((error) => {
        alert('Error al cargar la pelicula:',error.message)
    });

});
