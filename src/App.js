import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Delivery from "./components/Delivery";
import Menu from "./components/Menu";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
       <Header/>
       <About/>
       <Delivery/>
       <Menu/>
       <Register/>
       <Footer/>
    </div>
  );
}

export default App;
