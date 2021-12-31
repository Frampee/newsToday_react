// "rce + tabular" para crear el componente home
import React, { Component } from 'react'

export class home extends Component {
    render() {
        return (
            // Renombramos div con el nombre del componente, en este caso, home
            <home>
                <p>Esto es <strong>Home</strong></p>
            </home>
        )
    }
}

export default home
