import createAbilitiesList from './createAbilitiesList.js';

const updatePokemon = (pokemonDom, pokemonData) => {
    //update name
    pokemonDom.querySelector('#name').innerText = pokemonData.name;

    //update img
    pokemonDom.querySelector('#img').src = pokemonData.sprites.front_default;
    pokemonDom.querySelector('#img').alt = `${pokemonData.name} Image`;

    //abilities list
    const oldList = pokemonDom.querySelector('#ability-list');
    const newList = createAbilitiesList(pokemonData.abilities);
    oldList.replaceWith(newList);
};

export default updatePokemon;
