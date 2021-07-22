import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './components/common/Home';
import Shop from './components/common/Shop';
import About from './components/common/About';
import Contact from './components/common/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>


      <Footer />
    </div >
  );
}

export default App;
