// "rce + tabular" para crear el componente form
import React, { Component } from 'react'

export class form extends Component {

    // "rconst + tabular" para crear el constructor
    constructor(props) {
      super(props)
    
      this.state = {
        // Contendrá la información insertada en createNews, se guarda en la memoria del componente
        lastAdded:{},
        // Creamos un array que contenga todas la noticias creadas
        arrayNewNews:[]
      }
    }
    
    // La siguiente función nos permitirá crear una nueva noticia
    createNews = () => {
      // prompt hace dinámico las siguientes constantes
      const name = prompt ("Introduce el título");
      const category = prompt ("Introduce la categoría");
      const newspaper = prompt ("Introduce el periódico");

      // Modificamos state con el último añadido, setState actualiza el state
      this.setState({lastAdded:{name,category,newspaper}})

      alert(`Noticia ${name}, Categoría ${category}, Periódico ${newspaper} creada`)
    }

    render() {
        return (
            <div>
                <p>Esto es <strong>Form</strong></p>

                {/* Creamos un botón que nos permita borrar cada noticia, al pulsar ek botón se invocará la función */}
                <button onClick={this.createNews}> Crear </button>

                {/* Pintamos la última notica creada */} 
               <h5>Última noticia creada: {this.state.lastAdded.name}</h5>
               
            </div>
        )
    }
}

export default form
