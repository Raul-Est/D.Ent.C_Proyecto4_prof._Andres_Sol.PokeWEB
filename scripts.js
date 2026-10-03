//Inicio: Import
    import * as pokeApi from "./pokeApi/api.js"
    import * as bootstrap from "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
//Fin: Import 

/*Inicio: Inicialización de la aplicación */

window.addEventListener("load", function(){
    const pokemonName = document.getElementById("pokemon-name");
    const searchError = document.getElementById("search-error");
    const form1 = document.getElementById("form1");

    form1.addEventListener("submit", async function($e){
        $e.preventDefault();
        searchError.textContent = "";
        pokemonName.textContent = "";

        const formData = new FormData(this);
        const pokemonNumber = formData.get("pokedex-number");

        try {
            const pokemonData = await pokeApi.getPokemonById(pokemonNumber);
            pokemonName.textContent = pokemonData.name;
        } catch (error) {
            searchError.textContent = error instanceof Error
                ? error.message
                : "No se pudo buscar el Pokémon.";
        }
    });

});


/*Fin: Inicialización de la aplicación */
