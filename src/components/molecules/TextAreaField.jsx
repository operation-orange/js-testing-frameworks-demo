import React from 'react';
import FormField from './FormField';

const TextAreaField = props => (
  <FormField {...props}>
    <textarea className="FormField__textarea" />
  </FormField>
);

export default TextAreaField;
