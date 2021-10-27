/** vista.js
 *  Vista del Juego MecaTRON 3000
 *  @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
 *  @license GPL v3 2021
 **/

/**
 * Clase Vista que muestra el juego
 */
export class Vista{

    constructor(){

        this.divPrincipal = null;

    }

    /**
     * Dibuja el área de juego
     * @param palabra {String} La nueva Palabra
     */
    dibujar(palabra){

        let div = document.createElement('div');
        this.divPrincipal.appendChild(div);
        div.appendChild(document.createTextNode(palabra));
        div.classList.add('palabra');
        div.style.top = '0px';
        div.style.left = Math.floor(Math.random()*85) + '%';

    }

    /**
     * Mueve las palabras hacia abajo
     */
    moverPalabras(){

        //Encontrar todas las palabras
        let palabras = this.divPrincipal.querySelectorAll('.palabra');
        
        //Moverlas
        for(let palabra of palabras){
            let top = parseInt(palabra.style.top);
            console.log(this.divPrincipal.style.height);
            if(top < parseInt(this.divPrincipal.style.height)){
                top += 5;
                palabra.style.top = `${top}px`;
            }else this.explotar(palabra);
        }

    }

    explotar(palabra){

        palabra.remove();

    }

}