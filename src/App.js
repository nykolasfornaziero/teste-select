import './App.css';
import { Component } from 'react';
import Cards from './Cards/Cards';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import MainPage from "./pages";
import Planets from "./pages/planets";
import Vehicles from "./pages/vehicles";
import Movies from "./pages/movies";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <Router>
      <div className="container-fluid text-center">
        <Link to="/">
          <a href="" className="btn btn-outline-success">Voltar ao Início</a>
        </Link>
      </div>
      <Cards />
      <hr></hr>
      <Switch>
        <Route path="/" exact component={MainPage}></Route>
        <Route path="/planetas" exact component={Planets}></Route>
        <Route path="/filmes" exact component={Movies}></Route>
        <Route path="/veiculos" exact component={Vehicles}></Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
