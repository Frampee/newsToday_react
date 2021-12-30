// "rce + tabular" para crear el componente list_news
import React, { Component } from 'react'

// importamos los componentes que vamos a necesitar usar.
import Card from "./Card";

export class list_news extends Component {
    render() {
        return (
            // Renombramos div con el nombre del componente, en este caso, home
            <listnews>
                <p>Esto es el <strong>List News</strong></p>
                {/* Importamos Card tantas veces como necesitemos, y, a cada una de ellas le pasamaos las props*/}
                <Card name="noticia_1" category="economy"/>
                <Card name="noticia_2" category="politics"/>
                <Card name="noticia_3" category="economy"/>
                <Card name="noticia_4" category="travel"/>
                <Card name="noticia_5" category="animals"/>
            </listnews>
        )
    }
}

export default list_news
