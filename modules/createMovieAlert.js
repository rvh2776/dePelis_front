
const alertImage = (urlImagen, nuevaImagen, title ) => {
    const alertaUrlImage = document.getElementById('alertaUrlImage');

    urlImagen.addEventListener('blur', () => {

        if (urlImagen.value.trim() === '') {
            alertaUrlImage.textContent = 'Campo "url de la imagen" es requerida';
            alertaUrlImage.style.display = 'block';
            nuevaImagen.src = 'https://c8.alamy.com/compes/fnj661/fotograma-de-pelicula-de-35-mm-con-copia-espacio-o-utilizar-como-capa-fnj661.jpg';
            nuevaImagen.alt = `Imagen predeterminada`;
            nuevaImagen.title = `Imagen predeterminada`;
        } else {
            alertaUrlImage.style.display = 'none';
            nuevaImagen.src = urlImagen.value;
            nuevaImagen.alt = `Poster de la película: ${title.value}`;
            nuevaImagen.title = title.value;
        };
    });
};

const alertTitle = (title, titulo) => {
    const alertaTitle = document.getElementById('alertaTitle');

    title.addEventListener('blur', () => {
        
        if (title.value.trim() === '') {
            alertaTitle.textContent = 'Campo "título" requerido';
            alertaTitle.style.display = 'block';
        } else {
            alertaTitle.style.display = 'none';
            titulo.textContent = `Título: ${title.value}`;
        };
    });
};

const alertDirector = (director, direccion) => {
    const alertaDirector = document.getElementById('alertaDirector');

    director.addEventListener('blur', () => {

        if (director.value.trim() === '') {
            alertaDirector.textContent = 'Campo "director" requerido';
            alertaDirector.style.display = 'block';
        } else {
            alertaDirector.style.display = 'none';
            direccion.textContent = `Director: ${director.value}`;
        };
    });
};

const alertYear = (estreno, year) => {
    const alertaEstreno = document.getElementById('alertaEstreno');

    year.addEventListener('blur', () => {
            
        if (year.value.trim() === '') {
            alertaEstreno.textContent = 'Campo "estreno" requerido';
            alertaEstreno.style.display = 'block';
        } else {
            alertaEstreno.style.display = 'none';
            estreno.textContent = `Año: ${year.value}`;
        };
    });
};

const alertDuration = (duracion, duration) => {
    const alertaDuracion = document.getElementById('alertaDuracion');

    duration.addEventListener('blur', () => {

        if (duration.value.trim() === '') {
            alertaDuracion.textContent = 'Campo "duración" requerido';
            alertaDuracion.style.display = 'block';
        } else {
            alertaDuracion.style.display = 'none';
            duracion.textContent = `Duración: ${duration.value}`;
        };
    });
};

const alertGenre = (genero, genre) => {
    const alertaGenero = document.getElementById('alertaGenero');

    genre.addEventListener('blur', () => {
            
        if (genre.value.trim() === '') {
            alertaGenero.textContent = 'Campo "género" requerido';
            alertaGenero.style.display = 'block';
        } else {
            alertaGenero.style.display = 'none';
            genero.textContent = `Género: ${genre.value}`;
        };
    });
};

const alertRate = (puntuacion, rate) => {
    const alertaPuntuacion = document.getElementById('alertaPuntuacion');

    rate.addEventListener('blur', () => {

        if (rate.value.trim() === '') {
            alertaPuntuacion.textContent = 'Campo "puntuación" requerido';
            alertaPuntuacion.style.display = 'block';
        } else {
            alertaPuntuacion.style.display = 'none';
            puntuacion.textContent = `Puntuación: ${rate.value}`;
        };
    });
};

const alertDescription = (descripcion, description) => {
    const alertaDescripcion = document.getElementById('alertaDescripcion');

    description.addEventListener('blur', () => {
            
        if (description.value.trim() === '') {
            alertaDescripcion.textContent = 'Campo "descripción" requerido';
            alertaDescripcion.style.display = 'block';
        } else {
            alertaDescripcion.style.display = 'none';
            descripcion.textContent = `${description.value}`;
        };
    });
};

export {
    alertImage,
    alertTitle,
    alertDirector,
    alertYear,
    alertDuration,
    alertGenre,
    alertRate,
    alertDescription,
}
