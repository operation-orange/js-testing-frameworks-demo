import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  children,
  className,
  qaId,
  ...otherProps
}) => (
  <button
    className={classNames('Button', className)}
    data-qa-id={qaId}
    {...otherProps}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  qaId: PropTypes.string
};

Button.defaultProps = {
  children: null,
  className: null,
  qaId: null
};

export default Button;
