let getAllPokemons = async () => {
    let pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon");

    pokemonData = await pokemonData.json();

    return pokemonData;
}

let getPokemonById = async (id) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("No se encontró un Pokémon con ese número o nombre.");
        }

        throw new Error(`PokéAPI respondió con el estado ${response.status}.`);
    }

    return await response.json();
}


let getPokemonsAbility = async (abilityName) => {
    let pokemonData = await fetch ("https://pokeapi.co/api/v2/ability/" + abilityName);

    pokemonData = await pokemonData.json();

    return pokemonData;
};

let getPokemonType = async (abilityName) => {
    let pokemonData = await fetch ("https://pokeapi.co/api/v2/type/" + abilityName);

    pokemonData = await pokemonData.json();

    return pokemonData;
};

export {getAllPokemons, getPokemonById, getPokemonsAbility, getPokemonType}