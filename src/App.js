import React from "react";
import Inicio from "./components/inicio/Inicio";
import Header from "./components/Nav/Header";
import Slider from "./components/Slider/Slider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacto from "./components/contacto/Contacto";
import Foot from "./components/footer/Foot";
import Weus from "./components/nosotros/Weus";
import Catalogo from "./components/productos/Catalogo";
import Shopping from "./components/carrito/Shopping";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Header />
            <Slider />
            <Inicio />
            <Foot />
          </Route>
          <Route path="/Catalogo">
            <Header />
            <Catalogo />
            <Foot />
          </Route>
          <Route path="/Nosotros">
            <Header />
            <Weus />
            <Foot />
          </Route>
          <Route path="/Contacto">
            <Header />
            <Contacto />
            <Foot />
          </Route>
          <Route path="/Carrito">
            <Header />
            <Shopping />
            <Foot />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
