import './App.css';
import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/footer/footer';
import Navbar from './Components/navbar/navbar';
import Home from './Components/home/home.jsx';
import About from './Components/about/about.jsx';
import Contacto from './Components/contacto/contacto.jsx';
import Mapa from './Components/mapa/mapa.jsx';


//https://github.com/bootcamp-FI/Proyecto-Final
export default function App() {
  return (
    <>
      <Navbar />
      <Switch>

        <Route exact path='/'>
          <Home/>
        </Route>

        <Route exact path='/about' >
          <About/>
        </Route>

        <Route exact path='/footer/contacto'>
          <Contacto/>
        </Route>

        <Route exact path='/map'>
          <Mapa/>
        </Route>


      </Switch>
      <Footer />

    </>
    
  );
}
/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/