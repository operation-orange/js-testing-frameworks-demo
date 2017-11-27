import React from 'react';
import PropTypes from 'prop-types';
import connectState from './Home.state';
import Button from '../../components/atoms/Button';

export const Home = ({ switchBrandAction }) => (
  <div>
    Select brand:&nbsp;
    <Button onClick={() => switchBrandAction('Topshop')} qaId="topshop-button">Topshop</Button>
    <Button onClick={() => switchBrandAction('ASOS')} qaId="asos-button">ASOS</Button>
    <Button onClick={() => switchBrandAction('Next')} qaId="next-button">Next</Button>
  </div>
);

Home.propTypes = {
  switchBrandAction: PropTypes.func.isRequired
};

export default connectState(Home);
