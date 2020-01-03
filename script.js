const BASE_URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/';
const BASE_URL_SPRITE = 'https://pokeapi.co/api/v2/pokemon-form/';

let fetchData = (url, index) => {
    return $.get(url + index.toString());
};

let createDivTag = (index) => {
    return $("<div>", { 'id': index });
};

let createH1Tag = (name) => {
    const $h1 = $('<h1>');
    $($h1).append(name);
    return $h1;
};

let createImgTag = (src) => {
    return $('<img>', { 'src': src });
};

for (let i = 1; i < 152; i++) {
    // Creating divs for 151 pokemon
    let $div = createDivTag(i);
    $('.grid').append($div);

    // Getting data from REST API
    let getPokemonData = fetchData(BASE_URL_POKEMON, i);
    let getSpriteData = fetchData(BASE_URL_SPRITE, i);

    // Appending data to DOM
    getPokemonData.done((pokemon) => {
        let $h1 = createH1Tag(pokemon.name);
        $('#' + i).append($h1);
    });
    getSpriteData.done((sprite) => {
        let $img = createImgTag(sprite.sprites.front_default);
        $('#' + i).prepend($img);
    });
}