import './App.css';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';

import React, { useState, useContext } from 'react';
import Brand from './components/brand/brand';
import Reviews from './components/reviews/reviews';
import Contact from './components/contact/contact';
import Location from './components/location/location';
import Carousel from './components/home/Carousel/carousel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const StoreContext = React.createContext();

const App = () => {
  return (
    <StoreContext.Provider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/brand">
            <Brand />
          </Route>
          <Route path="/specials">
            <Location />
          </Route>
          <Route path="/specials">
            <Contact />
          </Route>
          <Route path="*">{/* <Error /> */}</Route>
        </Switch>
      </Router>
      <Location />
    </StoreContext.Provider>
  );
};

export default App;
