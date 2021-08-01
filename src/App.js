import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ingredients from './pages/Ingredients';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <Route path='/salad-orders/'>
          <Home />
        </Route>
        <Route path='/salad-orders/ingredients'>
          <Ingredients />
        </Route>
        <Route path='/salad-orders/checkout'>
          <Checkout />
        </Route>
      </div>
    </Router>
  );
}

export default App;
