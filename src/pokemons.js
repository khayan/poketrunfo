const path = './img/pokemons/';
const ext = '.png';
const pokemons = [];

for (let id = 1; id <= 151; id++) {

    if (id < 10) {
        id = `00${id}`;
    } else if (id > 9 && id < 100) {
        id = `0${id}`;
    }
    const pokemon = `${path}${id}${ext}`;
    pokemons.push(pokemon);
}

export default pokemons;