
/**
 * Comprueba cual es el Jugador Ganador de la partida
 * @param {Array<Number>} puntosJugadores Ejemplo: [ 21, 14 ]
 */
export const comprobarGanador = (puntosJugadores) => {
    let mensajeGanador = '';
    let [ puntosJugador, puntosComputadora ] = puntosJugadores;
    
    setTimeout(() => {
        if(puntosJugador === puntosComputadora) {
            mensajeGanador = '¡¡¡ OMG !!!! Empate.';
            console.log(`%c ${mensajeGanador}`, 'font-size: 15px; padding: 0.5rem; background-color: #110909; color: white; border-radius: 1rem; margin: 1rem;');
        } else if(puntosComputadora > 21) {
            mensajeGanador = 'Jugador Ganó la partida.';
            console.log(`%c ${mensajeGanador}`, 'font-size: 15px; padding: 0.5rem; background-color: #3014d1; color: white; border-radius: 1rem; margin: 1rem;');
            console.log('%c Computadora Perdió la partida.', 'font-size: 15px; padding: 0.5rem; background-color: #a02430; color: white; border-radius: 1rem; margin: 1rem;');
        } else if(puntosJugador > 21 || puntosComputadora > puntosJugador) {
            mensajeGanador = 'Computadora Ganó la partida.';
            console.log(`%c ${mensajeGanador}`, 'font-size: 15px; padding: 0.5rem; background-color: #3014d1; color: white; border-radius: 1rem; margin: 1rem;');
            console.log('%c Jugador Perdió la partida.', 'font-size: 15px; padding: 0.5rem; background-color: #a02430; color: white; border-radius: 1rem; margin: 1rem;');
        }
    
        alert(mensajeGanador);
    }, 200);
};