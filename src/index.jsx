import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import './style.css';
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <Router>
    <Link to="/">Home</Link>
    <Link to="/reservation">Reservation</Link>

    <Switch>
      <Route path="/" exact>
        <Header />
        <h2>1.stranka</h2>
        <Footer />
      </Route>

      <Route path="/reservation" exact>
        <Header />
        <h2>2.stranka</h2>
        <Footer />
      </Route>
    </Switch>
  </Router>
);

render(<App />, document.querySelector('#app'));
