import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Store from './components/Store';
import HandleSearch from './components/HandleSearch';
import './App.css';

const Navbar = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/store">Store</Link>
  </div>
)

const Home = () => <h1>Home</h1>

const Routes = routes => (
  <Switch>
    <Route exact path="/" render = {props => <Home {...props} />}/>
    <Route path="/store" component={Store} />
  </Switch>
)

const App = () => {



  return (
    <div>
      <HandleSearch />
      <Navbar />
      <Routes />
      <HomePage />
    </div>
  );
}

export default App;
