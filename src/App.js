import React from "react";
//import Inicio from "./components/inicio/Home";
import Header from "./components/Nav/Header";
import Slider from "./components/Slider/Slider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacto from "./components/contacto/Contacto";
import Foot from "./components/footer/Foot";
import Weus from "./components/nosotros/Weus";
//import Catalogo from "./components/productos/Catalogot";
//import Shopping from "./components/carrito/Shoppingt";
import Sesionuser from "./components/sesionuser/Sesion";
import Registrate from "./components/sesionuser/Registrate";
import Catalogot from "./components/productos/Catalogot";
import Shoppingt from "./components/carrito/Shoppingt";
import Home from "./components/inicio/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Header />
            <Slider />
            <Home />
            <Foot />
          </Route>
          <Route path="/Catalogo">
            <Header />
            <Catalogot />
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
            <Shoppingt />
            <Foot />
          </Route>
          <Route path="/Registrate">
            <Header />
            <Registrate />
            <Foot />
          </Route>
          <Route path="/Sesionuser">
            <Header />
            <Sesionuser />
            <Foot />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
