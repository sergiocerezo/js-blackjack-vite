
/**
 * Crea un nuevo Deck de Cartas
 * @param {Array<String>} tiposCartas Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} cartasEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Retorna un nuevo Deck de Cartas
 */
export const crearDeck = (tiposCartas, cartasEspeciales) => {
    if(!tiposCartas || tiposCartas.length === 0) {
        throw new Error('tipoCartas es obligatorio como un arreglo de string');
    }

    if(!cartasEspeciales || cartasEspeciales.length === 0) {
        throw new Error('cartasEspeciales es obligatorio como arreglo de string');
    }

    let deck = [];
    for(let i = 2; i <= 10; i++) {
        for(let tipoCarta of tiposCartas) {
            deck.push(`${i}${tipoCarta}`);
        }
    }
    for(let cartaEspecial of cartasEspeciales) {
        for(let tipoCarta of tiposCartas) {
            deck.push(`${cartaEspecial}${tipoCarta}`);
        }
    }
    return deck;
};