import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import connectState from './App.state';
import './App.css';
import routes from './routes';
import MainHeader from '../components/organisms/MainHeader';

export const App = ({ brand }) => (
  <div className={classNames('App', {
    topshop_brand: brand === 'Topshop',
    asos_brand: brand === 'ASOS',
    next_brand: brand === 'Next'
  })}
  >
    <div className="wrapper">
      <MainHeader brand={brand} />
      <div className="App__content">
        {routes}
      </div>
      <div className="push" />
    </div>
    <footer>
      This is the footer
    </footer>
  </div>
);

App.propTypes = {
  brand: PropTypes.string.isRequired
};

export default connectState(App);
