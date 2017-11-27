import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, qaId, ...otherProps }) => (
  <button data-qa-id={qaId} {...otherProps}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.node,
  qaId: PropTypes.string
};

Button.defaultProps = {
  children: null,
  qaId: null
};

export default Button;
