import React from 'react';
import PropTypes from 'prop-types';
import connectState from './Home.state';
import Button from '../../components/atoms/Button';

export const Home = ({ push }) => (
  <div>
    <p>
      A simple React application (based on <a href="https://github.com/facebookincubator/create-react-app" rel="noopener noreferrer" target="_blank">Create React App</a>)
      to demonstrate usage of the Protractor/CucumberJS end-to-end testing framework and the Galen
      layout testing framework.
    </p>
    <p>
      This site demonstrates the concept of testing a single platform that supports multiple brands
      (e.g. an ecommerce platform). Chosen because, even though the switch between each brand may
      result in functionally and visually similar websites, from a testing perspective each brand
      site should be tested as if it is completely standalone. Each with its own distinct set of
      tests.
    </p>
    <p>
      Because there will be many similar, only slightly varying tests between each brand,
      this example better highlights the code reusability of how the E2E and layout testing
      frameworks have been implemented.
    </p>
    Select brand:&nbsp;
    <Button onClick={() => push('/?brand=topshop')} qaId="topshop-button">Topshop</Button>
    <Button onClick={() => push('/?brand=asos')} qaId="asos-button">ASOS</Button>
    <Button onClick={() => push('/?brand=next')} qaId="next-button">Next</Button>
  </div>
);

Home.propTypes = {
  push: PropTypes.func.isRequired
};

export default connectState(Home);
