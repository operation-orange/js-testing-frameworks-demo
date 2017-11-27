import React from 'react';
import PropTypes from 'prop-types';
import connectState from './About.state';

export const About = ({ brand }) => (
  <div>The {brand} About Page</div>
);

About.propTypes = {
  brand: PropTypes.string.isRequired
};

export default connectState(About);
