import createAbilitiesList from './createAbilitiesList.js';

const createPokemon = (pokemonData) => {
    //container
    const container = document.createElement('div');
    container.id = 'container';
    container.classList.add('pokemon-container');

    //name
    const name = document.createElement('h2');
    name.id = 'name';
    name.innerText = pokemonData.name;

    //img
    const img = document.createElement('img');
    img.id = 'img';
    img.alt = `${pokemonData.name} Image`;
    img.src = pokemonData.sprites.front_default;

    //abilities - title
    const abilities = document.createElement('h3');
    abilities.innerText = 'Abilities:';

    //abilities list
    const abilitiesList = createAbilitiesList(pokemonData.abilities);
    abilities.append(abilitiesList);

    container.append(name, img, abilities, abilitiesList);

    return container;
};

export default createPokemon;
