const api_url = "https://pokeapi.co/api/v2/pokemon/";
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", async () => {
  const pokemonName = document
    .getElementById("pokemon-name")
    .value.toLowerCase();
  await fetchPokemonData(pokemonName);
});

async function fetchPokemonData(pokemonName) {
  fetch(api_url + pokemonName)
    .then((response) => response.json())
    .then((data) => {
      // Handle the API response
      const pokemonInfo = document.getElementById("pokemon-info");
      pokemonInfo.innerHTML = `
        <h1>${data.name}</h1>
        <p>Id: ${data.id}</p>
        <p>Height: ${data.height} m</p>
        <p>Weight: ${data.weight} Kg</p>
          <p>Type: ${data.types.map((typeInfo) => typeInfo.type.name).join(", ")}</p>
        <p>Default form:</p>
        <img src="${data.sprites.front_default}" alt="${data.name}" />
        <img src="${data.sprites.back_default}" alt="${data.name}" />
        <h2>Abilities:</h2>
      `;

      document.getElementById("card-abilities").innerHTML = "";

      data.abilities.forEach(async (abilityInfo) => {
        const abilityName = abilityInfo.ability.name;
        const response = await fetch(abilityInfo.ability.url);
        const data = await response.json();
        const abilityDescription = data.effect_entries.find(
          (entry) => entry.language.name === "en",
        ).effect;

        document.getElementById("card-abilities").innerHTML += `
        <div class="card">      
        <h3>${abilityName}</h3>
              <p>${abilityDescription}</p>
              </div>
            `;
      });
    });
}
