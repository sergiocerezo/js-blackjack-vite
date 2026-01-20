import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { pedirCarta } from "./pedir-carta";

/**
 * Encargado de realizar las jugadas automáticas de la Computadora
 * @param {Number} puntosMinimos Ejemplo: 1, 2, 3...
 * @param {Array<Number>} puntosJugadores Ejemplo: [ 21, 0 ]
 * @param {NodeListOf<Element>} spanPuntosJugadores 
 * @param {HTMLElement} divCartasComputadora 
 * @param {Array<String>} deckPartida Ejemplo: [ 'QS', '10H', '2D', ... ]
 */
export const turnoComputadora = (puntosMinimos, puntosJugadores, spanPuntosJugadores, divCartasComputadora,  deckPartida) => {
    if(isNaN(puntosMinimos)) {
        throw new Error('puntosMinimos es obligatorio que sea un valor Number');
    }

    let puntosComputadora = 0;
    do {
        let turno = puntosJugadores.length - 1;
        let cartaTomada = pedirCarta(deckPartida);
        puntosComputadora = acumularPuntos(puntosJugadores, spanPuntosJugadores, turno, cartaTomada);
        crearCarta(divCartasComputadora, cartaTomada);

        if(puntosMinimos > 21 || puntosComputadora == 21) {
            break;
        }
    } while(puntosComputadora <= puntosMinimos && puntosMinimos <= 21 );
};