/////////////////  api function to fetch random film info ///////////////////

async function getFilms(){
    generateFilmsLoading()
    let randomFilm = Math.floor((Math.random() * 7) + 1);
    const response = await fetch('https://swapi.co/api/films/' + randomFilm);
    const data = await response.json();
    const { title, director, release_date } = data;

    document.getElementById('film_title').textContent = title;
    document.getElementById('film_director').textContent = director;
    document.getElementById('film_release_date').textContent = release_date;

}

function generateFilmsLoading() {
    film_title.innerText            = 'Loading...'
    film_director.innerText         = 'Loading...'
    film_release_date.innerText     = 'Loading...'
}

getFilms();

document.getElementById("getfilm").addEventListener("click", getFilms);

/////////////////  api function to fetch random person info ///////////////////

async function getPeople(){
    generatePeopleLoading()
    let randomPerson = Math.floor((Math.random() * 88) + 1);
    const response = await fetch('https://swapi.co/api/people/' + randomPerson);
    const data = await response.json();
    const { name, height, birth_year } = data;

    document.getElementById('person_name').textContent = name;
    document.getElementById('person_birth_year').textContent = birth_year;
    document.getElementById('person_height').textContent = height;

}

function generatePeopleLoading() {
    person_name.innerText           = 'Loading...'
    person_birth_year.innerText     = 'Loading...'
    person_height.innerText         = 'Loading...'
}


getPeople();

document.getElementById("getperson").addEventListener("click", getPeople);


/////////////////  api function to fetch random planet info ///////////////////

async function getPlanet(){
    generatePlanetLoading()
    let randomPlanet = Math.floor((Math.random() * 61) + 1);
    const response = await fetch('https://swapi.co/api/planets/' + randomPlanet);
    const data = await response.json();
    const { name, population, climate } = data;

    document.getElementById('planet_name').textContent = name;
    document.getElementById('planet_population').textContent = population;
    document.getElementById('planet_climate').textContent = climate;

}

function generatePlanetLoading() {
    planet_name.innerText           = 'Loading...'
    planet_population.innerText     = 'Loading...'
    planet_climate.innerText        = 'Loading...'
}


getPlanet();

document.getElementById("getplanet").addEventListener("click", getPlanet);


/////////////////  api funtion to fetch random planet info ///////////////////

async function getSpecies(){
    generateSpeciesLoading()
    let randomSpecies = Math.floor((Math.random() * 37) + 1);
    const response = await fetch('https://swapi.co/api/species/' + randomSpecies);
    const data = await response.json();
    const { name, classification, language } = data;

    document.getElementById('species_name').textContent = name;
    document.getElementById('species_classification').textContent = classification;
    document.getElementById('species_language').textContent = language;

}

function generateSpeciesLoading() {
    species_name.innerText              = 'Loading...'
    species_classification.innerText    = 'Loading...'
    species_language.innerText          = 'Loading...'
}


getSpecies();

document.getElementById("getspecies").addEventListener("click", getSpecies);


// var el = document.getElementById('btn-next');
// if(el){
//   el.addEventListener('click', getPeople, false);
// }
