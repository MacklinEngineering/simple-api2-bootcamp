//This base code (code format) was provded thanks to JSWay.

const getPokemon = () => {

  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then(pokemon => {

      const poke = pokemon[0];

      const nameElement = document.createElement("h2");
      nameElement.textContent = poke.name;
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = poke.description;

      const volumeElement = document.createElement("p");
      volumeElement.textContent = poke.volume.value; //+ `${unit}`;

      const pokeElement = document.getElementById("pokemon");
      pokeElement.innerHTML = "";

      pokeElement.appendChild(nameElement);
      pokeElement.appendChild(descriptionElement);
      pokeElement.appendChild(volumeElement);
    })
    .catch(err => {
      console.error(err.message);
    });
};

document.getElementById("grabButton").addEventListener("click", getPokemon);
