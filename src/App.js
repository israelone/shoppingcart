import './App.css';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import StoreContext from './context';
import React, { useState, useContext } from 'react';
import Brand from './components/brand/brand';
import Reviews from './components/reviews/reviews';
import Contact from './components/contact/contact';
import Location from './components/location/location';
import Carousel from './components/home/Carousel/carousel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const products = [
  {
    name: '',
    image: '',
    rating: '',
    price: 300,
    id: '1',
  },
  {
    name: '',
    image: '',
    rating: '',
    price: 250,
    id: '2',
  },
  {
    name: '',
    image: '',
    rating: '',
    price: 400,
    id: '3',
  },
  {
    name: '',
    image: '',
    rating: '',
    price: 325,
    id: '4',
  },
  {
    name: '',
    image: '',
    rating: '',
    price: 500,
    id: '5',
  },
  {
    name: '',
    image: '',
    rating: '',
    price: 250,
    id: '6',
  },
];

function App() {
  return (
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
        <Route path="*">{/* <Error /> */}</Route>
      </Switch>
    </Router>
    // // <StoreContext value={{ products }}>

    //   {/* <Carousel></Carousel> */}

    //
    //   {/* <About />
    //   <Brand />
    //   <Reviews />
    //   <Contact />
    //   <Location /> */}

    // {/* // </StoreContext> */}
  );
}

export default App;
