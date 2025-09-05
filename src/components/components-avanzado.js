/*
 * EJERCICIO EXTENDIDO ->
 *
 *  Demostrar cómo el lifecycle se propaga en jerarquías padre-hijo
 *   y el orden de ejecución en componentes anidados.
*/


import React, { Component } from "react";

// PARENT COMPONENT -> SOLO EXPORTAMOS EL PRINCIPAL (a default)
export default class DiscussionAdvanced extends Component {
    
    constructor() {
        
        super();
        
        this.state = {
            messages: [],
            messageCounter: 0
        };
        
        console.log(" [AVANZADO] Parent: constructor");
    }

    componentDidMount() {

        console.log("[AVANZADO] Parent: componentDidMount");
        
        
        this.messageAdder = setInterval(() => {
        
            this.setState(prevState => ({
        
                messages: [...prevState.messages, {
        
                    id: prevState.messageCounter,
                    text: `Message ${prevState.messageCounter}`,
                    time: new Date().toLocaleTimeString()
        
                }],
        
                messageCounter: prevState.messageCounter + 1
        
            }));
        }, 2000);
    }

    componentWillUnmount() {
        
        console.log("[AVANZADO] Parent: componentWillUnmount");
        
        clearInterval(this.messageAdder);
    }

    
    
    render() {
        
        
        console.log("[AVANZADO] Parent: render");
        
        return (
            <div>
            <h1>[EJERCICIO AVANZADO] Discussion</h1>
            <DiscussionList messages={this.state.messages} />
            </div>
        );
    }
}



// CHILD COMPONENTS -> Como clase interna, NO SE EXPORTAM
class DiscussionList extends Component {
    
    
    constructor(props) {
        super(props)

        console.log("[AVANZADO] Child: constructor");
    }

    componentDidMount() {
        console.log("[AVANZADO] Child: componentDidMount");
    }

    componentDidUpdate() {
        console.log("[AVANZADO] Child: componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("[AVANZADO] Child: componentWillUnmount");
    }

    render() {
        
        console.log("[AVANZADO] Child: render");
        
        
        return (
        
            <div>
            <h3>Messages ({this.props.messages.length})</h3>
            
            {this.props.messages.map(message => (
            
                <DiscussionMessage key={message.id} message={message} />
            
            ))}
            </div>
        );
    }
}


// Grandchild component -> TAMPOCO SE EXPORTA
class DiscussionMessage extends Component {
    
    
    render() {
        
        console.log("[AVANZADO] Grandchild: render");
        
        const { message } = this.props;
        
        return (
        
            <div style={{border: '1px solid #ccc', margin: '5px', padding: '10px'}}>
            <strong>{message.text}</strong>
            <small> - {message.time}</small>
            </div>
        );
    }
}
