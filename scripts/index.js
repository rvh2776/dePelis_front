// const axios = require('axios');
import axios from 'axios';

import {tempData} from './tempData';
import {Repository} from '../modules/Repository';
import {renderCard} from '../modules/renderCard';

const repository = new Repository();

const renderCards = () => {
  const nuevaTarjeta = document.getElementById('tarjeta');
  nuevaTarjeta.innerHTML = '';

  const tarjeta = repository.peliculas.map(renderCard);

  tarjeta.forEach((card) => {
    nuevaTarjeta.appendChild(card);
  });
};

//* Probando api desde server express local.
const respuesta = axios.get(`http://localhost:3001/movies`);

respuesta
  .then((resp) => {

    resp.data.map((datos) => {
      repository.createPelicula(datos);
    })
    renderCards();
    
  })
  .catch((error) => {

    if (error.message === 'Network Error') {
      alert(`La comunicacion con el backend no se pudo realizar, \nerror: ${error.message} \n\nCargando datos en cache!`)

      tempData.map((datos) => {
        repository.createPelicula(datos);
      })
      
      renderCards();
    } else {
      alert(` Error al procesar la peticion: codigo ${error.response.status}. \n Descripcion: ${error.code} \n\n Cargando datos en cache!`)
      
      tempData.map((datos) => {
        repository.createPelicula(datos);
      })
      
      renderCards();
    };
});




