// "rce + tabular" para crear el componente list_news
import React, { Component } from 'react'

// importamos los componentes que vamos a necesitar usar.
import Card from "../Card";

// List_news será el padre de Card, es decir, el componente List_news envía la información al componente Card
export class list_news extends Component {
    render() {

        // Creamos un array que contenga todas nuestra noticias
        const arrayContenedorNoticias = [
            // Cambiamos el newspaper establecido como state en card.jsx
            {name:"noticia_1", category:"economy", newspaper: "El Mundo"},
            {name:"noticia_2", category:"politics", newspaper: "Ok Diario"},
            {name:"noticia_3", category:"economy"},
            {name:"noticia_4", category:"travel"},
            {name:"noticia_5", category:"animals"}
        ]
      
        return (
            <div>
                <p>Esto es <strong>List News</strong></p>
                {/* Importamos Card tantas veces como necesitemos, y le pasamos los datos por props */}
                <Card info={arrayContenedorNoticias[0]}/>
                <Card info={arrayContenedorNoticias[1]}/>
                <Card info={arrayContenedorNoticias[2]}/>
                <Card info={arrayContenedorNoticias[3]}/>
                <Card info={arrayContenedorNoticias[4]}/>
            </div>
        )
    }
}

export default list_news
