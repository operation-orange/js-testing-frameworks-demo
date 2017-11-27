import React from 'react';
import PropTypes from 'prop-types';
import connectState from './Contact.state';

export const Contact = ({ brand }) => (
  <div>The {brand} Contact Page</div>
);

Contact.propTypes = {
  brand: PropTypes.string.isRequired
};

export default connectState(Contact);
