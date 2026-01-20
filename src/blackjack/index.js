import { crearDeck, inicializarJuego, turnoPersona, turnoComputadora, comprobarGanador } from './usecases';

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
*/

(() => {
    'use strict'

    /* Variables Gloables */
    let deck = [];
    let tiposCartas = ['C', 'D', 'H', 'S'];
    let cartasEspeciales = ['A', 'J', 'Q', 'K'];
    
    let deckPartida = [];
    let puntosJugadores = [];
    
    /* Constantes - Referencia Elementos HTML */
    const spanPuntosJugadores = document.querySelectorAll('.jugador__puntaje span');
    const divCartasJugadores = document.querySelectorAll('.jugador__cartas');
    const botonNuevaPartida = document.querySelector('#btnNuevaPartida');
    const botonPedirCarta = document.querySelector('#btnPedirCarta');
    const botonDetener = document.querySelector('#btnDetener');
    
    /* Inicializa Juego al cargar */
    deck = crearDeck(tiposCartas, cartasEspeciales);
    let { deckResultante, arrPuntosJugadores } = inicializarJuego( 2, deck, spanPuntosJugadores, divCartasJugadores, botonPedirCarta, botonDetener );
    deckPartida = deckResultante;
    puntosJugadores = arrPuntosJugadores;
    
    /* Eventos */
    botonNuevaPartida.addEventListener('click', () => {
        let { deckResultante, arrPuntosJugadores } = inicializarJuego( 2, deck, spanPuntosJugadores, divCartasJugadores, botonPedirCarta, botonDetener );
        deckPartida = deckResultante;
        puntosJugadores = arrPuntosJugadores;
    });
    
    botonPedirCarta.addEventListener('click', () => {
        let puntosJugador = turnoPersona(deckPartida, puntosJugadores, spanPuntosJugadores, divCartasJugadores[0]);
        if(puntosJugador >= 21) {
            botonPedirCarta.disabled = true;
            botonDetener.disabled = true;

            turnoComputadora(puntosJugador, puntosJugadores, spanPuntosJugadores, divCartasJugadores[puntosJugadores.length - 1], deckPartida);
            comprobarGanador(puntosJugadores);
        }
    });

    botonDetener.addEventListener('click', () => {
        botonPedirCarta.disabled = true;
        botonDetener.disabled = true;

        turnoComputadora(puntosJugadores[0], puntosJugadores, spanPuntosJugadores, divCartasJugadores[puntosJugadores.length - 1], deckPartida);
        comprobarGanador(puntosJugadores);
    });
})();

