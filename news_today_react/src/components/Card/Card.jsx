// "rce + tabular" para crear el componente card
import React, { Component } from 'react'

export class card extends Component {

    // "rconst + tabular" para crear el constructor
    constructor(props) {
      super(props)
    
      this.state = {
        // Con state, todas nuestras noticias serán de El País.
         newspaper: "El País S.A."
      }
    }
    
    render() {

        // Entre render y return metemos nuestras variables y toda la lógica necesaria
        // Hacemos un destructuring de nuestras props.
        const {name,category} = this.props.info

        return (
            // Renombramos div con el nombre del componente, en este caso, card
            <card>
                {/* Insertamos las props indicadas en List_news */}
                <p>Noticia:{name}, Categoría:{category}, Periódico:{this.state.newspaper}</p>
            </card>
        )
    }
}

export default card
