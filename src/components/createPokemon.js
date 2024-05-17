import createAbilitiesList from './createAbilitiesList.js';
import createStatisticsList from './createStatisticsList.js';

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

    //statistics - title
    const statistics = document.createElement('h3');
    statistics.innerText = 'Statistics:';

    //statistics list
    const statisticsList = createStatisticsList(pokemonData.stats);
    statistics.append(statisticsList);

    container.append(
        name,
        img,
        abilities,
        abilitiesList,
        statistics,
        statisticsList,
    );

    return container;
};

export default createPokemon;
