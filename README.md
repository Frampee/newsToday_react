# newsToday_react
(Web de noticias creada con react):

Vamos a englobar todo lo visto estos días con un miniproyecto con React

News API => https://developer.nytimes.com/apis

Routing:
    /home. Home de la app
    /form. Formulario para crear noticia
    /list. Lista detallada de noticias

Componentes mínimos (Te toca a tí ordenar el arbol de componentes 😄):
    Head
    Nav
    Main
    Home. Input + botón para introducir nombre de usuario
    Form. Formulario de alta de nueva noticia. Tras dar de alta debes redirigir a ListNews
    ListNews. Haz una precarga de 5 noticias de la API + las que has dado de alta. Tu eliges el topic
    Card. Representa cada noticia. Debe tener un botón para poder borrarla
    Footer

Comunicación:   
    Context:
        Se debe introducir nombre de usuario desde la Home. Provider
        En el Head debe aparecer el nombre de usuario. Consumer
    Sibling--sibling. Para Form y ListNews

CSS/SCSS. Utilizar las técnicas de estilo vistas en clase

Lifecycle: No olvides usarlo para el tema de llamadas asíncronas

NOTA: Si necesitas añadir algún componente más, feel free!

# Pasos Iniciales
1. Crear repositorio en Github.
2. "git clone nombre_repositorio" en la carpeta donde queramos guardarlo en local.
3. "cd nombre_repositorio" para meternos en esa carpeta.
4. "git checkout -b develop" para crear la rama develop y movernos a ella.
5. "code ." para abrir Visual Studio Code.

¡¡¡ A partir de ahora nombre_repositorio pasa a ser news_today_react !!!

# Pasos Iniciales React
1. npx create-react-app news_today_react (crea la app de react para nuestra web)
2. cd news_today_react (nos metemos dentro del proyecto que nos crea)
3. npm start (lo inicializamos)
4. Crear una carpeta "components" dentro de "src".
5. Dentro de esta carpeta meter los componentes capitalizados:
    - Abrir "Split Terminal"
    - zsh
    - npm install --save-dev create-react-component-folder
    - cd news_today_react/src/components
    - npx crcf -j -f Card Footer Form Header Home List_news Main Nav