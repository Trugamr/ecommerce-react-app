import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.scss';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </Router>
  );
}

export default App;