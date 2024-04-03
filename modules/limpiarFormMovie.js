
const limpiarFormMovie = (
    nuevaImagen, 
    titulo, 
    title, 
    direccion, 
    year, 
    estreno, 
    duration, 
    duracion, 
    genre, 
    genero, 
    rate, 
    puntuacion, 
    descripcion, 
    description
    ) => {

        document.getElementById('title').value = '';
        document.getElementById('director').value = '';
        document.getElementById('estreno').value = '';
        document.getElementById('duracion').value = '';
        document.getElementById('genero').value = '';
        document.getElementById('puntuacion').value = '';
        document.getElementById('descripcion').value = '';
        document.getElementById('urlImagen').value = '';
    
        nuevaImagen.src = 'https://c8.alamy.com/compes/fnj661/fotograma-de-pelicula-de-35-mm-con-copia-espacio-o-utilizar-como-capa-fnj661.jpg';
        titulo.textContent = `Título: ${title.value}`;
        direccion.textContent = `Director: ${director.value}`;
        estreno.textContent = `Año: ${year.value}`;
        duracion.textContent = `Duración: ${duration.value}`;
        genero.textContent = `Género: ${genre.value}`;
        puntuacion.textContent = `Puntuación: ${rate.value}`;
        descripcion.textContent = `${description.value}`;
};

export {
    limpiarFormMovie,
};