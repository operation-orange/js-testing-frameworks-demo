import React from 'react';
import PropTypes from 'prop-types';
import connectState from './Contact.state';
import ContactForm from './ContactForm';

export const Contact = ({ brand, showContactFormDataAction }) => (
  <div>
    The {brand} Contact Page
    <ContactForm onSubmit={showContactFormDataAction} />
  </div>
);

Contact.propTypes = {
  brand: PropTypes.string.isRequired,
  showContactFormDataAction: PropTypes.func.isRequired
};

export default connectState(Contact);
