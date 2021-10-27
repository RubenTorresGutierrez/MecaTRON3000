/** mecatron3000.js
 *  Controlador principal del Juego MecaTRON 3000
 *  @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
 *  @license GPL v3 2021
 **/

'use strict'

//IMPORTACIONES
import {Vista} from './vista.js';
import {Modelo} from './modelo.js';

/**
 * Controlador Principal del Juego
 */
class Juego{

    constructor(){

        this.vista = new Vista();
        this.modelo = new Modelo();
        this.generadorPalabras = null;
        this.animador = null;
        this.divPrincipal = null;
        window.onload = this.iniciar.bind(this);

    }

    /**
     * Pone en marcha el juego
     */
    iniciar(){

        this.divPrincipal = document.getElementById('divPrincipal');
        this.vista.divPrincipal = this.divPrincipal;
        this.generadorPalabras = window.setInterval(this.generarPalabra.bind(this), 5000);
        this.animador = window.setInterval(this.vista.moverPalabras.bind(this.vista), 100);

    }

    /**
     * Llama al método crearPalabra() del modelo, que le devuelve 
     * una palabra, y esta la envía al método dibujar() de la vista, 
     * para que la añada al divPrincipal.
     * @param nuevapalabra {String} Palabra creada por crearPalabra() y enviada a dibujar()
     */
    generarPalabra(){

        let nuevapalabra = this.modelo.crearPalabra();
        this.vista.dibujar(nuevapalabra);

    }

}

var app = new Juego();