// EJERCICIO EXTRA 2

/*
 * Performance OptimiSation con shouldComponentUpdate


*/

import React, { Component } from 'react'

export default class OptimisedCounter extends Component {

    constructor() {

        super();

        this.state = {

            count: 0,
            dummyData: "TYFGHJLRYITUHIJNKMhfgpsdhsf"
        
        };

        // ✅ BIND manual necesario para métodos clásicos
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDummyUpdate = this.handleDummyUpdate.bind(this)

    }



    // OPTIMIZACION 1: Solo re-renderizar si count mensajes cambia
    shouldComponentUpdate(nextProps, nextState) {

        console.log('[ADVANCED 2] shouldComponentUpdate invoked!')
        console.log('[ADVNCED 2] Current count: ', this.state.count )
        console.log('[ADVANCED 2] Next count: ', nextState.count)


        // Aquí está la !== gracia
        return this.state.count !== nextState.count 

    }

    componentDidUpdate(){

        console.log('[ADVANCED 2] componentDidUpdate() - Se ha renderizado!')

    }

    handleIncrement( ){

        this.setState( { count: this.state.count + 1 } )

    }
    handleDummyUpdate() {

        this.setState( { dummyData: "updated!" } )
        console.log('[ADVANCED 2]  DummyData se actualizó (pero esta optimización hace que no se re-renderice! (Se trataba de eso xD)')


    }  

    render() {

        console.log('[ADVANCED 2] Se invocó algo para render ...')

        return(
            <div>

                <h2>Optimised Counter: {this.state.count}</h2>

                <button onClick={this.handleIncrement}>AÑADE MENSAJE</button>
                
                <button onClick={this.handleDummyUpdate}>
                Update Dummy Data (no debería usar render)
                </button>
                
                <p>DummyData: {this.state.dummyData}</p>
            </div>

        )
    }


}

