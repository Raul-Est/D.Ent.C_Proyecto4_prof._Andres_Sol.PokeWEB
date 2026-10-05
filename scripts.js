//Inicio: Import
    import * as pokeApi from "./pokeApi/api.js"
    import * as bootstrap from "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
//Fin: Import 

/*Inicio: Inicialización de la aplicación */

window.addEventListener("load", function(){

     /*Inicio: Referencias del DOM */
    const pokemonName = document.getElementById("pokemon-name");
    const searchError = document.getElementById("search-error");

    const searchForms = [
        document.getElementById("form1"),
        document.getElementById("form-header")
    ].filter(Boolean);

    const catalogGrid = document.getElementById("catalog-grid");
    const keypadButtons = document.querySelectorAll(".keypad-btn");
    const resetButton = document.getElementById("reset-search");
    const voiceToggle = document.getElementById("voice-toggle");
    const cryButton = document.getElementById("info-cry");
    const prevButton = document.getElementById("prev-pokemon");
    const nextButton = document.getElementById("next-pokemon");
    /*Fin: Referencias del DOM */


    async function searchPokemon($e){
        $e.preventDefault();

        // Espera a que el catálogo de la API esté disponible.
        if (!ready) {
            return;
        }

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
    searchForms.forEach(form => 
        form.addEventListener("submit", searchPokemon)
    );

    /*Inicio: Reset del buscador */
    document.getElementById("reset-search").addEventListener("click", function(){
        const input = document.getElementById("pokemon-number");
        input.value = "";
        searchError.textContent = "";
        pokemonName.textContent = "";
        input.focus();
    });
    /*Fin: Reset del buscador */
});


/*Fin: Inicialización de la aplicación */
