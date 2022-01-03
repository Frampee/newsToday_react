// "rce + tabular" para crear el componente card
import React, { Component } from 'react'

// Card será hijo de List_news es decir, el componente Card recibe la información del componente List_news
export class card extends Component {

    // "rconst + tabular" para crear el constructor
    constructor(props) {
      super(props)
      // El state va implícito en cada componente
      this.state = {
        // Con esta operación le decimos que nos pase por props el periódico, y sino lo encuentra, el string.
         newspaper: this.props.info.newspaper || "El País"
      }
    }

    // La siguiente función nos permitirá eliminar una noticia
    deleteNews = () => {
      alert("Eliminado")
    }
    
    render() {

        // Entre render y return metemos nuestras variables y toda la lógica necesaria
        // Hacemos un destructuring de nuestras props.
        const {name,category} = this.props.info

        return (
            <div>
                {/* Insertamos las props indicadas en List_news */}
                <p>Noticia:{name}, Categoría:{category}, Periódico:{this.state.newspaper}</p>

                {/* Creamos un botón que nos permita borrar cada noticia, al pulsar ek botón se invocará la función */}
                <button onClick={this.deleteNews}> Borrar </button>
            </div>
        )
    }
}

export default card
