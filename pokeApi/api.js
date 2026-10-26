const getAllPokemons = async () => {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000"
    );
    if (response.ok == true) {
        throw new Error("No se pudieron cargar los datos");
    }
    const data = await response.json();

    return data.results;
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


// export {getAllPokemons, getPokemonById, getPokemonsAbility, getPokemonType}

export {getAllPokemons, getPokemonById, getPokemonsAbility, getPokemonType, getAllPokemons}


/*
    Listado paginado de Pokémon con nombre e imagen.
Detalle con tipos, altura, peso, habilidades y estadísticas.
Movimientos y ataques, con sus datos.
Estados de carga y mensajes de error.
*/

/*
Desarrollar las funciones necesarias para consumir la pokeapi y RETORNAR correctamente los valores, 
las funciones tienen que ser:
- function getAllPokemons()
- function getPokemonById(id)
- function getPokemonsAbility(abilityName)
- function getPokemonType(typeName)
- function getPokemonAbility(id, abilityName)
*/