import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <>
    <Header />
    <Footer />
  </>
);

render(<App />, document.querySelector('#app'));
