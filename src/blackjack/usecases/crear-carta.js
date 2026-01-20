
/**
 * Crea carta en DOM con base al nombre proporcionado 
 * @param {HTMLElement} divCartasJugador
 * @param {String} nombreCarta Ejemplo: 2H, 10C
 */
export const crearCarta = (divCartasJugador, nombreCarta) => {
    if(!divCartasJugador) {
        throw new Error('divCartasJugador es obligatorio como HTMLElement');
    }

    if(!nombreCarta) {
        throw new Error('nombreCarta es obligatorio como string');
    }
    
    const imagenCarta = document.createElement('IMG');
    imagenCarta.src = `assets/cartas/${nombreCarta}.png`;
    imagenCarta.classList.add('tablero__carta');
    imagenCarta.setAttribute('alt', 'Imagen Carta de Tablero');
    divCartasJugador.append(imagenCarta);
};