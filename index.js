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
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
        const data = await response.json();
        console.log(data);
        const pokemonName = data.name;
        const sprite = data.sprites.front_default;
        const cry = data.cries.latest;
        audio.src = cry;
        name.textContent = pokemonName.toUpperCase();
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;
        abilityOne.textContent =`-> ${data.abilities[0].ability.name}`;
        abilityTwo.textContent = `-> ${data.abilities[1].ability.name}`;
        img.src = sprite;
    } catch (error) {
        console.error(error);
    }
}

function playAudio(){
    audio.play();
}