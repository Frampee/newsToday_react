// "rce + tabular" para crear el componente header
import React, { Component } from 'react'

export class header extends Component {
    render() {
        return (
            // Renombramos div con el nombre del componente, en este caso, header
            <header>
                <p>Esto es el header</p>
            </header>
        )
    }
}

export default header
