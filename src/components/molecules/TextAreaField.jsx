import React from 'react';
import FormField from './FormField';
import './TextAreaField.css';

const TextAreaField = props => (
  <FormField {...props}>
    <textarea className="TextAreaField" />
  </FormField>
);

export default TextAreaField;
