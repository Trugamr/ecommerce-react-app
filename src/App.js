import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.scss';

import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <h1>Hats Page</h1>
)

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </Router>
  );
}

export default App;