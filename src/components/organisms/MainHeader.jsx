import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import topshopLogo from '../../assets/images/topshop-logo.gif';
import asosLogo from '../../assets/images/asos-logo.png';
import nextLogo from '../../assets/images/next-logo.png';
import './MainHeader.css';
import NavLink from '../atoms/NavLink';

const logos = {
  Topshop: topshopLogo,
  ASOS: asosLogo,
  Next: nextLogo
};

export const MainHeader = ({ brand }) => (
  <header className="App-MainHeader-header">
    <img src={logos[brand]} className={classNames('App-MainHeader-logo', `App-MainHeader-logo-${brand}`)} alt="logo" data-qa-id="main-logo" />
    <h1 className="App-MainHeader-title">
      Welcome to the {brand}&nbsp;
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
