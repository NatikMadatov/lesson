
"use strict";


// const apps = 'ivan';

// console.log(`https://youtube.com/${apps}/1`);


// const user = "Anar";

// alert(`Hello ${user}`);

// let name = "natik";

// alert (`hello ${name}`);




const numbersOfFilms = prompt("Сколько фильмов вы посмотрели",'');






const personalMovieDb = {

    count:numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('question1?',''),
        b =prompt('question2?',''),
        c = prompt('question1?',''),
        d = prompt('question2','');


        personalMovieDb.movies[a] = b;
        personalMovieDb.movies[c] = d;

        console.log(personalMovieDb);