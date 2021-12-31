// "rce + tabular" para crear el componente footer
import React, { Component } from 'react'

export class footer extends Component {
    render() {
        return (
            // Renombramos div con el nombre del componente, en este caso, footer
            <footer>
                <p>Esto es <strong>Footer</strong></p>
            </footer>
        )
    }
}

export default footer
