import { calcularValorCarta } from "./valor-carta";

/**
 * Acumula el valor de la carta proporcionada al puntaje del jugador en turno 
 * @param {Array<Number>} puntosJugadores Ejemplo: [ 0, 1 ]
 * @param {NodeListOf<Element>} spanPuntosJugadores
 * @param {Number} turno Ejemplo: 0, 1, ...
 * @param {String} cartaTomada Ejemplo: 2H, 10C
 * @returns {Number} Retorna el puntaje actual del jugador en turno
 */
export const acumularPuntos = (puntosJugadores, spanPuntosJugadores, turno, cartaTomada) => {
    if(!puntosJugadores || puntosJugadores.length === 0) {
        throw new Error('puntosJugadores es obligatorio como arreglo de number');
    }
    
    if(!spanPuntosJugadores || spanPuntosJugadores.length === 0) {
        throw new Error('spanPuntosJugadores es obligatorio como NodeListOf de Elementos');
    }

    if(isNaN(turno)) {
        throw new Error('turno es obligatorio como valor númerico');
    }

    puntosJugadores[turno] = puntosJugadores[turno] + calcularValorCarta(cartaTomada);
    spanPuntosJugadores[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}