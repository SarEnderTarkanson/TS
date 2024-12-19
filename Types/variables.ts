let movieTitle: string = "Se7en";

movieTitle = "Arrival";

movieTitle = 9;

movieTitle.toUpperCase()

let numCatLives: number = 9;
numCatLives += 1;
numCatLives = "dog"

let gameOver: boolean = false;
gameOver = true;

// Type Inference

let tvShow = "The Big Bang Theory";
tvShow = false;

let isFunny = false
isFunny = true;
isFunny = 5

//the any type
let thing: any = "hello";
thing = 5;
thing = false;
thing();
thing.toUpperCase()

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"]

let foundMovie : string;

for(let movie of movies){
    if(movie === "Amadeus"){
        foundMovie = "Amadeus";
    }
}

foundMovie();
foundMovie = 1;