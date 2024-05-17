import data from '../data.js';
import dom from '../dom.js';

import getPokemonApi from '../../apis/getPokemonApi.js';
import createPokemon from '../components/createPokemon.js';
import updatePokemon from '../components/updatePokemon.js';

const getPokemonHandler = async () => {
    const value = Number(dom.input.value);

    //check if pokemonDom exist
    const pokemonExistDom = dom.root.querySelector('#container');

    //check if the old value is the same with the new value
    if (data.oldValue === value) {
        return;
    }

    //check if the value is correct
    const isValidValue = value > 0 && value < 1280;
    if (!isValidValue) {
        pokemonExistDom.remove();
        data.oldValue = null;
        dom.input.value = '';
        dom.error.classList.add('error');
        dom.error.innerText = `Please enter a valid Pokémon id`;
        dom.root.append(dom.error);
        return;
    }

    //remove error message if exist
    const errorExist = dom.root.querySelector('.error');
    if (errorExist) {
        dom.error.remove();
    }

    //get data - api
    const pokemonData = await getPokemonApi(value);

    if (!pokemonExistDom) {
        const pokemonDom = createPokemon(pokemonData);
        dom.root.append(pokemonDom);
    } else {
        updatePokemon(pokemonExistDom, pokemonData);
    }

    //clear the input value
    dom.input.value = '';
    data.oldValue = value;
};

export default getPokemonHandler;
