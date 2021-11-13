/** 
 *  @file Controlador principal del Juego MecaTRON 3000
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
        /**
          Constructor de la clase Juego
        **/
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
        window.onkeypress = this.pulsar.bind(app);

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

    /**
      Evento de atención a la pulsación del teclado.
      Busca las palabras que tienen la letra pulsada y cambia su estado.
      Cambiando el estilo y moviendo las letras de un sitio a otro.
      @param {KeyboardEvent} evento Evento de pulsación del teclado.
    **/
    pulsar(evento){

        let letraPulsada = evento.key;
        //Encontrar todas las palabras
        let palabras = this.divPrincipal.querySelectorAll('.palabra');

        for(let palabra of palabras){
            let span = palabra.children.item(0);
            let nodotexto = palabra.childNodes[1];
            let textoRestante = nodotexto.nodeValue;
            let primeraLetraTextoRestante = textoRestante.charAt(0);
            if(letraPulsada == primeraLetraTextoRestante){
                span.textContent += letraPulsada;
                nodotexto.nodeValue = textoRestante.substring(1);
                //Si ya están todas las letras en el span
                if(nodotexto.length == 0){
                    //Se elimina la palabra
                    this.vista.borrarPalabra(palabra, true);
                    //Se suma un punto
                    this.modelo.sumarPunto();
                }
            }else{
                //Ha fallado, se repone el texto de la palabra
                nodotexto.nodeValue = span.textContent + nodotexto.nodeValue;
                span.textContent = '';
            }
        }


    }

}

var app = new Juego();