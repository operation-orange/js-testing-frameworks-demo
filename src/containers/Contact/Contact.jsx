import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';
import connectState from './Contact.state';
import ContactForm from './ContactForm';

export const Contact = ({ brand, contactFormSubmitted }) => (
  <div className="Contact">
    <ContactForm onSubmit={() => {}} />
    {contactFormSubmitted && <div className="Contact__submitted">{brand || 'Unbranded'} contact form successfully submitted!</div>}
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
