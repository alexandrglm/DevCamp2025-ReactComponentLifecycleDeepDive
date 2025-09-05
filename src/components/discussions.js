// Guide 07 React Components' Lifecycle

// Ejercicio Extendido 2, Demostrar memory leak hecho
// Ejercicio 2.2 -> Arreglar el bug

import React, { Component } from "react";

export default class Discussion extends Component {

    // Extenidod 2
    constructor()  {

        super();
        this.state = {
            
            pageTitle: "Discussion",
            currentTime: String(new Date())

        }

    }

    // PROBLEMA:  Memory Leak
    // SOLUCION PARTE 1-> GUARDAR referencia del Interval
    componentDidMount() {

       this.liveTime = setInterval( () => {

            console.log('[EXERCISE 2] New Chat Message');
            this.setState( {

                currentTime: String(new Date())

            })
        }, 1000);

    }

    // SOLUCION PARTE 2 -> CLEANUP al desmontar
    componentWillUnmount() {

        clearInterval(this.liveTime);        
        console.log('[EXERCISE 2 FIXES] Cleaned up Timer, No Memory Leaks!')

    }
    componentDidUpdate() {
        console.log('[EXERCISE 2 FIXES] componentDidUpdate()  - Timer triggered!')

    }


    render() {

        // (des)estructuramos los objetos
        const { pageTitle, currentTime } = this.state


        return ( 
            <div>
                <h1>{pageTitle}</h1>
                <div>{currentTime}</div>

            </div>
        )
    }

}