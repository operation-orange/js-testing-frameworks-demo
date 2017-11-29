import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { required, email } from 'redux-form-validators';
import InputField from '../../components/atoms/InputField';
import Button from '../../components/atoms/Button';

export const ContactForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} noValidate>
    <Field
      label="First Name"
      name="firstName"
      component={InputField}
      type="text"
      validate={[required({ msg: 'Please provide your first name' })]}
      qaId="first-name-field"
    />
    <Field
      label="Last Name"
      name="lastName"
      component={InputField}
      type="text"
      validate={[required({ msg: 'Please provide your last name' })]}
      qaId="last-name-field"
    />
    <Field
      label="Email"
      name="email"
      component={InputField}
      type="email"
      validate={[required({ msg: 'Please provide your email' }), email({ msg: 'Invalid email' })]}
      qaId="email-field"
    />
    <Button type="submit">Submit</Button>
  </form>
);

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'contact'
})(ContactForm);
