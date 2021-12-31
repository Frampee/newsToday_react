// "rce + tabular" para crear el componente main
import React, { Component } from 'react'

// importamos los componentes que vamos a necesitar usar.
import List_news from "../List_news";

export class main extends Component {
    render() {
        return (
            // Renombramos div con el nombre del componente, en este caso, main
            <main>
                <p>Esto es <strong>Main</strong></p>
                <List_news/>
            </main>
        )
    }
}

export default main
