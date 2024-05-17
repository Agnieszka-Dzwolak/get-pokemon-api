const getPokemonApi = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!res.ok) {
            throw new Error('Pokémon not found');
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(`Pokémon with id: ${id} cannot be fetched`);
    }
};

export default getPokemonApi;
