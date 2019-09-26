import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import * as constants from './constants/Constants';
import Store from './components/Store';
import HandleSearch from './components/HandleSearch';
import './App.css';

const Navbar = () => (
  <div className="navbar-main">
    <Link to="/">Home</Link>
    <Link to="/store">Store</Link>
  </div>
)

const Home = () => <h1>Home</h1>

const Routes = ({ movies, updateMovies }) => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/store" component={HomePage} />
  </Switch>
)

const App = () => {

  const [movies, setMovies] = useState({})



  return (
    <div style={{ height: '100%', }}>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
