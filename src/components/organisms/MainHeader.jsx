import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './MainHeader.css';
import NavLink from '../atoms/NavLink';

const logos = {
  Topshop: '/images/topshop-logo.gif',
  ASOS: '/images/asos-logo.png',
  Next: '/images/next-logo.png'
};

export const MainHeader = ({ brand }) => (
  <header className="App-MainHeader-header">
    {brand && (
      <img
        src={logos[brand]}
        className={classNames('App-MainHeader-logo', `App-MainHeader-logo-${brand}`)}
        alt="logo"
        data-qa-id="main-logo"
      />
    )}
    <h1 className="App-MainHeader-title" data-qa-id="main-title">
      Welcome to the {brand}&nbsp;
      {brand || 'Unbranded '}
      <Route path="/" exact component={() => 'Home Page'} />
      <Route path="/about" exact component={() => 'About Page'} />
      <Route path="/contact" exact component={() => 'Contact Page'} />
    </h1>
    <nav className="App-MainHeader-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  </header>
);

MainHeader.propTypes = {
  brand: PropTypes.string.isRequired
};

export default MainHeader;
