const enter = document.getElementById('result');
const img = document.getElementById('img');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const abilityOne = document.getElementById('a1');
const abilityTwo = document.getElementById('a2');

async function getPokemonName() {
const search = document.getElementById('search').value;
const name = document.getElementById('name').value;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
        const data = await response.json();
        const name = data.name;
        const capitalized = name.charAt(0).toUpperCase()+name.slice(1);
        const sprite = data.sprites.front_default;
        name.textContent = `${capitalized}`;
        img.src = sprite;
    } catch (error) {
        console.error(error);
        enter.textContent = `Invalid Name. Please check your spelling.`
    }
}
