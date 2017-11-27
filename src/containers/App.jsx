import React from 'react';
import PropTypes from 'prop-types';
import connectState from './App.state';
import './App.css';
import routes from './routes';
import MainHeader from '../components/organisms/MainHeader';

export const App = ({ brand }) => (
  <div className="App">
    <MainHeader brand={brand} />
    <div>
      {routes}
    </div>
  </div>
);

App.propTypes = {
  brand: PropTypes.string.isRequired
};

export default connectState(App);