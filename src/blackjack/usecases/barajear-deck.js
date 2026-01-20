const obtenerNumeroRandom = (numeroMaximo) => {
    let numeroRandom = Math.random();
    let numeroRetorno = Math.floor(numeroRandom * numeroMaximo); 
    return numeroRetorno;
};


/**
 * Barajea Deck de Cartas proporcionado la cantidad de veces indicada 
 * @param {Array<String>} deckEntrada Ejmeplo: [ 'QS', '10H', '2D', ... ] 
 * @param {Number} repeticiones Ejemplo: 2, 3, ... 
 * @returns { Array<String>} Retorna un Deck barajeado con base al Deck proporcionado 
 */
export function barajearDeck (deckEntrada, repeticiones = 1) {
    if(!deckEntrada || deckEntrada.length === 0) {
        throw new Error('deckEntrada es obligatorio como arreglo de string');
    }
    
    let deckResultante = [];

    while(deckResultante.length < deckEntrada.length) {
        let cartaObtenida = deckEntrada[obtenerNumeroRandom(deckEntrada.length)];

        if(deckResultante.indexOf(cartaObtenida) === -1) {
            deckResultante.push(cartaObtenida);
        }
    }

    if(repeticiones > 1) {
        deckResultante = barajearDeck(deckResultante, --repeticiones);
    }

    return deckResultante;
}