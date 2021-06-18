import "./App.css";
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import StoreContext from "./context";
import React, { useState, useContext } from "react";
import Brand from "./components/brand/brand";
import Reviews from "./components/reviews/reviews";
import Contact from "./components/contact/contact";
const products = [
  {
    name: "",
    image: "",
    rating: "",
    price: 300,
    id: "1",
  },
  {
    name: "",
    image: "",
    rating: "",
    price: 250,
    id: "2",
  },
  {
    name: "",
    image: "",
    rating: "",
    price: 400,
    id: "3",
  },
  {
    name: "",
    image: "",
    rating: "",
    price: 325,
    id: "4",
  },
  {
    name: "",
    image: "",
    rating: "",
    price: 500,
    id: "5",
  },
  {
    name: "",
    image: "",
    rating: "",
    price: 250,
    id: "6",
  },
];

function App() {
  return (
    // <StoreContext value={{ products }}>
    <>
      <NavBar />
      <Home />
      <About />
      <Brand />
      <Reviews />
      <Contact />
    </>
    // </StoreContext>
  );
}

export default App;
