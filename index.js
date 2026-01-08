const img = document.getElementById('img');
const audio = document.getElementById('pokemon-sound');


async function getPokemon() {
const search = document.getElementById('search').value.toLowerCase();
const name = document.getElementById('name');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const abilityOne = document.getElementById('a1');
const abilityTwo = document.getElementById('a2');

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`); //Fetch data from API
        const data = await response.json(); //Convert it to json
        const pokemonName = data.name; //Fetch the name data
        const sprite = data.sprites.front_default; //change the image source to the api image
        const cry = data.cries.latest; //change the audio source to the api source
        audio.src = cry; //assign to audio
        name.textContent = pokemonName.toUpperCase(); //change the name from html to api name value
        weight.textContent = `Weight: ${data.weight}`; //Change the weight to api wweight
        height.textContent = `Height: ${data.height}`; //change the height to api height
        abilityOne.textContent =`-> ${data.abilities[0].ability.name}`; 
        abilityTwo.textContent = `-> ${data.abilities[1].ability.name}`;
        img.src = sprite; //assign the image src.
    } catch (error) {
        console.error(error);
    }
}

function playAudio(){ //plays the audio on click
    audio.play();
}