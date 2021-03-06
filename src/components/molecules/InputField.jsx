import React from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';

const InputField = ({ type, ...otherProps }) => (
  <FormField {...otherProps}>
    <input type={type} className="InputField" />
  </FormField>
);

InputField.propTypes = {
  type: PropTypes.string
};

InputField.defaultProps = {
  type: 'text'
};

export default InputField;
