
/**
 * Calcula el valor numérico de la carta proporcionada
 * @param {String} carta Ejemplo: 10H
 * @returns {Number} Retorna el valor numérico de la carta
 */
export const calcularValorCarta = (carta) => {
    if(!carta) {
        throw new Error('carta es obligatorio como string');
    }
    
    let valor = carta.substring(0, carta.length -1);
    return ( isNaN(valor) ) ? (valor === 'A' ? 11 : 10) : valor * 1;
};