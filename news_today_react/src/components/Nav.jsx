// "rce + tabular" para crear el componente nav
import React, { Component } from 'react'

export class nav extends Component {
    render() {
        return (
            // Renombramos div con el nombre del componente, en este caso, nav
            <nav>
                <p>Esto es el nav</p>
            </nav>
        )
    }
}

export default nav
