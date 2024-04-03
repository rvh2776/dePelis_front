// const Pelicula = require('./Pelicula');
import {Pelicula} from './Pelicula';

class Repository{
    constructor(){
        this.peliculas = [];
        // this.id = 1;
    }

    createPelicula({id, title, year, director, duration, genre, rate, poster, description}){
        const newPelicula = new Pelicula(id ,title, year, director, duration, genre, rate, poster, description)
        this.peliculas.unshift(newPelicula);
        // this.id ++;
    };

    getPeliculas(id){
        // const filtro = this.peliculas.filter((pelicula) => {
        //     pelicula.id === id;
        // });
        // this.peliculas = filtro;
        this.peliculas = this.peliculas.filter((pelicula) => pelicula.id === id);
    }
};

// module.exports = Repository;

export {
    Repository,
};