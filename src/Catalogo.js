import logo from './images/logo.png';
import comida1 from './images/comida1.jpg';
import comida5 from './images/comida5.jpg';
import comida4 from './images/comida4.jpg';
import comida3 from './images/comida3.jpg';
import comida2 from './images/comida2.jpg';
import './Catalogo.css';

function Catalogo() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div> 
        <div className="App-menu">
          <ul>
            <li><a href="#">Registro</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Catálogo</a></li>
            <li><a href="#">Home</a></li>
          </ul>
        </div>
      </header>
      <section>
        <div className="App-content">
          <h1>Catálogo de comidas</h1>
          <ul>
            <li>
              <a href="#">Comida1</a>
              <img src={comida1} className="App-comida" alt="comida" />
              
            </li>
            <li>
              <a href="#">Comida2</a>
              <img src={comida2} className="App-comida" alt="comida" />
              
            </li>
            <li>
            <a href="#">Comida3</a>
              <img src={comida3} className="App-comida" alt="comida" />
              
            </li>
            <li>
            <a href="#">Comida4</a>
              <img src={comida4} className="App-comida" alt="comida" />
             
            </li>
            <li>
              <a href="#">Comida4</a>
              <img src={comida5} className="App-comida" alt="comida" />
              
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <div className="App-footer">
          <p>Viviana Llamas | Integrador | Proyecto II</p>
        </div>
      </footer>
    </div>
  );
}

export default Catalogo;
