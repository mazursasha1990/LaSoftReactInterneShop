import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Header, Footer } from './components/common';

import { Home, Shop, About, Contact } from './components/common';
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
