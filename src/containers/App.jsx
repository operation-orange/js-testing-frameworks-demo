import React from 'react';
import logo from '../assets/images/logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import routes from './routes';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" data-qa-id="main-logo" />
        <h1 className="App-title">
          Welcome to the&nbsp;
          <Route path="/" exact component={() => 'Home Page'} />
          <Route path="/about" exact component={() => 'About Page'} />
          <Route path="/contact" exact component={() => 'Contact Page'} />
        </h1>
        <nav className="App-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <div>
        {routes}
      </div>
    </div>
  </BrowserRouter>
);

export default App;
