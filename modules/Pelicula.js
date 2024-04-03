class Pelicula{
    constructor(id, title, year, director, duration, genre, rate, poster, description){
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
        this.description = description;
    }
};

// module.exports = Pelicula;

export {
    Pelicula,
};