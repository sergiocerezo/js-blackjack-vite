import { pedirCarta } from './pedir-carta';
import { acumularPuntos } from './acumular-puntos';
import { crearCarta } from './crear-carta';

/**
 * Realiza movimiento de la Persona jugadora
 * @param {Array<String>} deck Ejemplo: [ 'QS', '10H', '2D', ... ]
 * @param {Array<Number>} puntosJugadores Ejemplo: [ 0, 1 ]
 * @param {NodeListOf<Element>} spanPuntosJugadores
 * @param {HTMLElement} divCartasJugador
 * @returns Retorna el puntaje actual de la Persona jugadora
 */
export const turnoPersona = (deckPartida, puntosJugadores, spanPuntosJugadores, divCartasJugador) => {
    let cartaTomada = pedirCarta(deckPartida);
    let puntosJugador = acumularPuntos(puntosJugadores, spanPuntosJugadores, 0, cartaTomada);
    crearCarta(divCartasJugador, cartaTomada);

    return puntosJugador;
};