// Guide 07 React Components' Lifecycle

// Ejercicio Extendido 2, Demostrar memory leak

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
    componentDidMount() {

        setInterval( () => {

            console.log('[EXERCISE 2] New Chat Message');
            this.setState( {

                currentTime: String(new Date())

            })
        }, 1000);

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