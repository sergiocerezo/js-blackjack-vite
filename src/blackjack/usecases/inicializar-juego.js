import { barajearDeck } from "./barajear-deck";

/**
 * Inicializa una nueva partida de Blackjack
 * @param {Number} numJugadores 
 * @param {Array<Number>} puntosJugadores 
 * @param {Array<String>} deckPartida 
 * @param {Array<String>} deckRaiz 
 * @param {NodeListOf<Element>} spanPuntosJugadores 
 * @param {NodeListOf<Element>} divCartasJugadores 
 * @param {Element} botonPedirCarta 
 * @param {Element} botonDetener 
 */
export function inicializarJuego(numJugadores = 2, deckRaiz, spanPuntosJugadores, divCartasJugadores, botonPedirCarta, botonDetener) {
    if(!numJugadores || numJugadores < 2) {
        throw new Error('numJugadores es obligatorio como valor mayor al número 1');
    }
    
    if(!spanPuntosJugadores || spanPuntosJugadores.length === 0) {
        throw new Error('spanPuntosJugadores es obligatorio como NodeListOf de Elementos');
    }

    if(!divCartasJugadores || divCartasJugadores.length === 0) {
        throw new Error('divCartasJugadores es obligatorio como NodeListOf de Elementos');
    }

    if(!botonPedirCarta) {
        throw new Error('botonPedirCarta es obligatorio como Element');
    }

    if(!botonDetener) {
        throw new Error('botonDetener es obligatorio como Element');
    }
    
    console.clear();
    let deckResultante = barajearDeck(deckRaiz, 20);
    
    let arrPuntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        arrPuntosJugadores.push(0);
        spanPuntosJugadores[i].innerText = 0;
        divCartasJugadores[i].innerHTML = '';
    }

    botonPedirCarta.disabled = false;
    botonDetener.disabled = false;

    return  {
        deckResultante,
        arrPuntosJugadores
    };
}
