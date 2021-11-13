/** 
 *  @file Vista del Juego MecaTRON 3000
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
        let span = document.createElement('span')
        this.divPrincipal.appendChild(div);
        div.appendChild(span);
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
            if(top < parseInt(this.divPrincipal.clientHeight - 31)){
                top += 5;
                palabra.style.top = `${top}px`;
            }else this.borrarPalabra(palabra, false);
        }

    }

    /**
     * Elimina las palabras que se le pasen como parámetro, posteriormente, 
     * muestra una animación y finalmente modifica la puntuación del juego.
     * @param {Element} palabra La palabra que va a ser eliminada
     * @param {Boolean} acertado Indica si se va a borrar la palabra porque se ha acertado, o porque se ha fallado
     */
    borrarPalabra(palabra, acertado){

        //POSICION
        let top = palabra.style.top;
        let left = palabra.style.left;

        //BORRAR PALABRA
        palabra.remove();

        //IMAGEN
        let img = document.createElement('img');
        if(acertado)
            img.src = 'img/monedas.gif';
        else
            img.src = 'img/explosion.gif';
        img.style.position = 'absolute';
        img.style.width = '70px';
        img.style.top = top;
        img.style.left = left;
        this.divPrincipal.appendChild(img);

        //BORRAR EXPLOSIÓN
        setTimeout(function(){ img.remove(); }, 1000);

    }

}