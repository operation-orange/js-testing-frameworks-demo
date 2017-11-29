import React from 'react';
import PropTypes from 'prop-types';
import connectState from './Contact.state';
import ContactForm from './ContactForm';

export const Contact = ({ brand, contactFormSubmitted }) => (
  <div>
    <ContactForm />
    {contactFormSubmitted && <div>{brand || 'Unbranded'} contact form successfully submitted!</div>}
  </div>
);

Contact.propTypes = {
  brand: PropTypes.string.isRequired,
  contactFormSubmitted: PropTypes.bool
};

Contact.defaultProps = {
  contactFormSubmitted: false
};

export default connectState(Contact);
