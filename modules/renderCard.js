
const renderCard = ({id, title, year, director, duration, genre, rate, poster, description}) => {

    const card = document.createElement('div');
    card.className = 'card col-4 mx-auto my-2 px-2 imgEnlace';
    card.style.width = '18rem';
  
    card.addEventListener('click', () => {
      redirectToDetailsPage(id);
    });
    
    const nuevaImagen = document.createElement('img');
    nuevaImagen.className = 'card-img-top pt-2';
    nuevaImagen.src = poster;
    nuevaImagen.alt = `Poster de la película: ${title}`;
    nuevaImagen.title = title;

    const titulo = document.createElement('h5');
    titulo.className = 'card-title text-center pt-2';
    titulo.textContent = title;
  
    const divDetalles = document.createElement('div');
    divDetalles.className = 'card-body text-center';
  
    card.appendChild(nuevaImagen);
    card.appendChild(titulo);
  
    return card;
  };

  const redirectToDetailsPage = (pelicula) => {

    window.location.href = `../pages/detalles.html?id=${pelicula}`;
};
  
// module.exports = renderCard;

export {
  renderCard,
};
  