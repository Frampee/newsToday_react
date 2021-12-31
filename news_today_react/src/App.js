// Borramos import logo from './logo.svg';
import './App.css';

// Importamos nuestros componentes
import Footer from "./components/Footer/";
import Form from "./components/Form/";
import Header from "./components/Header/";
import Home from "./components/Home/";
import List_news from "./components/List_news/";
import Main from "./components/Main/";
import Nav from "./components/Nav/";

function App() {
  return (
    <div className="App">
        {/* Borramos lo contenido en este div y llamamos a los componentes previamente importados */}
        <Footer/>
        <Form/>
        <Header/>
        <Home/>
        <List_news/>
        <Main/>
        <Nav/>
    </div>
  );
}

export default App;
