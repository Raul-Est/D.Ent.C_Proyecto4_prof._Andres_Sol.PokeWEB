//Inicio: Import
    import * as pokeApi from "./pokeApi/api.js"
    import * as bootstrap from "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
//Fin: Import 

/*Inicio: Inicialización de la aplicación */

window.addEventListener("load", function(){
    const pokemonName = document.getElementById("pokemon-name");
    const searchError = document.getElementById("search-error");
    const searchForms = [
        document.getElementById("form1"),
        document.getElementById("form-header")
    ];

    async function searchPokemon($e){
        $e.preventDefault();
        searchError.textContent = "";
        pokemonName.textContent = "";

        const formData = new FormData(this);
        // La API acepta número o nombre en minúsculas
        const query = String(formData.get("pokedex-number")).trim().toLowerCase();

        try {
            const pokemonData = await pokeApi.getPokemonById(encodeURIComponent(query));
            pokemonName.textContent = pokemonData.name;
        } catch (error) {
            searchError.textContent = error instanceof Error
                ? error.message
                : "No se pudo buscar el Pokémon.";
        }
    }

    searchForms.forEach(form => form.addEventListener("submit", searchPokemon));

});


/*Fin: Inicialización de la aplicación */
