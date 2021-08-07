import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './components/common/Home';
import { PostsList } from './components/common/Shop/index';
import About from './components/common/About';
import Contact from './components/common/Contact';
import PageNotFound from './components/common/PageNotFound';
import { SinglePostPage } from './components/common/ProductPage/index';

//import ProductsData from './assets/productsData/products'

import './App.scss';

function App() {

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={PostsList} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop/:postId" component={SinglePostPage} />
        <Route component={PageNotFound} />
      </Switch>


      <Footer />
    </div >
  );
}

export default App;
