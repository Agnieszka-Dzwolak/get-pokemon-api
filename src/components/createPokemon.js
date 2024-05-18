import createAbilitiesList from './createAbilitiesList.js';
import createStatisticsList from './createStatisticsList.js';

const createPokemon = (pokemonData) => {
    //container
    const container = document.createElement('div');
    container.id = 'container';
    container.classList.add('pokemon-container');

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left');

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right');

    //name
    const name = document.createElement('h2');
    name.id = 'name';
    name.innerText = pokemonData.name;

    //img
    const img = document.createElement('img');
    img.id = 'img';
    img.alt = `${pokemonData.name} Image`;
    img.src = pokemonData.sprites.front_default;

    leftDiv.append(name, img);

    //abilities - title
    const abilities = document.createElement('h3');
    abilities.innerText = 'Abilities:';

    //abilities list
    const abilitiesList = createAbilitiesList(pokemonData.abilities);
    abilities.append(abilitiesList);

    //statistics - title
    const statistics = document.createElement('h3');
    statistics.classList.add('stats');
    statistics.innerText = 'Statistics:';

    //statistics list
    const statisticsList = createStatisticsList(pokemonData.stats);
    statistics.append(statisticsList);

    rightDiv.append(abilities, abilitiesList, statistics, statisticsList);

    container.append(leftDiv, rightDiv);

    return container;
};

export default createPokemon;
