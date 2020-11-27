import React from "react";
import Inicio from "./components/inicio/Inicio";
import Header from "./components/Nav/Header";
import Slider from "./components/Slider/Slider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacto from "./components/contacto/Contacto";
import Foot from "./components/footer/Foot";

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
            <Contacto />
            <Foot />
          </Route>
          <Route path="/Nosotros">
            <Header />
            <Contacto />
            <Foot />
          </Route>
          <Route path="/Contacto">
            <Header />
            <Contacto />
            <Foot />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
