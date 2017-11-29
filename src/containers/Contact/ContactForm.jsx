import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import InputField from '../../components/atoms/InputField';

export const ContactForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field label="First Name" name="firstName" component={InputField} type="text" />
    <Field label="Last Name" name="lastName" component={InputField} type="text" />
    <Field label="Email" name="email" component={InputField} type="email" />
    <button type="submit">Submit</button>
  </form>
);

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'contact'
})(ContactForm);
