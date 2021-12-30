// "rce + tabular" para crear el componente card
import React, { Component } from 'react'

export class card extends Component {
    render() {
        return (
            // Renombramos div con el nombre del componente, en este caso, card
            <card>
                {/* Insertamos las props indicadas en List_news */}
                <p>Noticia: {this.props.name}, Categoría: {this.props.category}.</p>
            </card>
        )
    }
}

export default card
