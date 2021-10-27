/** modelo.js
 *  Modelo del Juego MecaTRON 3000
 *  @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
 *  @license GPL v3 2021
 **/

/**
 * Clase Modelo que almacena los datos del juego
 */
 export class Modelo{

    constructor(){

        this.palabras = [];

    }

    /**
     * Devuelve una nueva palabra
     * @return {String} Palabra generada 
     */
    crearPalabra(){

        return this.crearPalabra[Math.floor(Math.random() * this.palabras.length)];

    }

}