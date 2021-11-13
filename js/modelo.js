/** 
 *  @file Modelo del Juego MecaTRON 3000
 *  @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
 *  @license GPL v3 2021
 **/

/**
 * Clase Modelo que almacena los datos del juego
 */
 export class Modelo{

    constructor(){

        this.palabras = ['hola', 'Mancha', 'lugar', 'Sancho'];

    }

    /**
     * Devuelve una nueva palabra.
     * Devuelve aleatoriamente un elemento del array de palabras.
     * @return {String} Palabra generada 
     */
    crearPalabra(){

        return this.palabras[Math.floor(Math.random() * this.palabras.length)];

    }

}