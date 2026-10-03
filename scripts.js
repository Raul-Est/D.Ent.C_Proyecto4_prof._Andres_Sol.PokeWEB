//Inicio: Import
    import * as pokeApi from "./pokeApi/api.js"
    import * as bootstrap from "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
//Fin: Import 

/*Inicio: Inicialización de la aplicación */

window.addEventListener("load", function(){
    
    /*QuerySelectorAll devuelve TODOS los elementos que cumplan el selector*/
    let inputName = document.querySelectorAll("#pokemon-name");

    let loadBar = document.getElementById("Load-bar");

    /*Retorna SOLO el primer elemento que cumpla con tener el id ya que un id debe ser UNICO en el DOM*/
    let form1 = document.getElementById("form1");


    form1.addEventListener("submit", async function($e){
        $e.preventDefault();

        let formData = new FormData(this);
        let pokemonNumber = formData.get("pokedex-number");
        
        let pokemonData = await pokeApi.getPokemonById(pokemonNumber);

        inputName[0].value=pokemonData.name;
    
    });

});


/*Fin: Inicialización de la aplicación */
