
/**
 * Obtiene la última carta del Deck de Cartas proporcionado
 * @param {Array<String>} deck Ejemplo: [ 'QS', '10H', '2D', ... ]
 * @returns {String} Retorna una carta del Deck de Cartas
 */
export const pedirCarta = (deck) => {
    if(!deck || deck.length === 0) {
        throw new Error('deck es obligatorio como arreglo de string');
    }

    return deck.pop();
};