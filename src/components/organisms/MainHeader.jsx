import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './MainHeader.css';
import NavLink from '../atoms/NavLink';

const logos = {
  topshop: '/images/topshop-logo.gif',
  asos: '/images/asos-logo.png',
  next: '/images/next-logo.png'
};

export const MainHeader = ({ brand }) => (
  <header className="MainHeader__header">
    {brand && (
      <img
        src={logos[brand.toLowerCase()]}
        className={classNames('MainHeader__logo', `MainHeader__logo_${brand.toLowerCase()}`)}
        alt="logo"
        data-qa-id="main-logo"
      />
    )}
    <h1 className="MainHeader__title" data-qa-id="main-title">
      Welcome to the {brand || 'Unbranded'}&nbsp;
      <Route path="/" exact component={() => 'Home Page'} />
      <Route path="/contact" exact component={() => 'Contact Page'} />
    </h1>
    <nav className="MainHeader__nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  </header>
);

MainHeader.propTypes = {
  brand: PropTypes.string.isRequired
};

export default MainHeader;
