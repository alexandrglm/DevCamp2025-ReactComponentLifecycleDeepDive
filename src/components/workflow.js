// Guide 07 React Components' Lifecycle

// Guide 07 React Components' Lifecycle

import React, { Component } from "react";

export default class Workflow extends Component {

    // PRIMER método! Inicialización
    constructor() {
        super();
        this.state = {
            pageTitle: 'Workflow'
        };
        
        // ✅ BIND manual necesario para métodos clásicos
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        
        console.log('[LECCION] 1. CONSTRUCTOR')
    }

    // SEGUNDO! -> props DERIVADOS
    static getDerivedStateFromProps() {
        console.log('[LECCION] 2. getDerivedStateFromProps()');
        return null;        
    }

    // CUARTO! componentDidMount()
    componentDidMount() {
        console.log('[LECCION] 4. componentDidMount()')
    }

    // QUINTO! shouldComponentUpdate()
    shouldComponentUpdate() {
        console.log('[LECCION] 5. shouldComponentUpdate() ')
        return true;
    }

    // SEPTIMO! getSnapshotBeforeUpdate()
    getSnapshotBeforeUpdate() {
        console.log('[LECCION] 7. getSnapshotBeforeUpdate')
        return null;
    }

    // OCTAVO - componentDidUpdate()
    componentDidUpdate() {
        console.log('[LECCION] 8. componentDidUpdate() ')
    }

    // NOVENO - componentWillUnmount() 
    componentWillUnmount() {
        console.log('[LECCION] 9. componentWillUnmount() ')
    }

    // ✅ Handlers con sintaxis clásica
    handleClick() {
        console.log("[LECCION] Botón click")
        this.setState({ pageTitle: 'Updated Workflow' })
    }
    
    handleKeyUp(e) {
        this.setState({ inputDetails: e.target.value })
    }

    // TERCERO!
    render() {
        console.log('[LECCION] 3 & 6. render()')

        return ( 
            <div>
                <h1>WorkFlow!</h1>
                <input type="text" placeholder="Escribe cualquier cosa y revisa los NOTICES de console" onKeyUp={this.handleKeyUp} />    
                <button onClick={this.handleClick}>CLICK ME!</button>
            </div>
        )
    }
}