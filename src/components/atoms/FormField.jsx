import React from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({
  children,
  input,
  label,
  meta: { touched, error, warning }
}) => {
  const clonedChild = React.cloneElement(children, { id: input.name, ...input });

  return (
    <div>
      <label htmlFor={input.name}>{label}</label>
      <div>
        {clonedChild}
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

TextInputField.propTypes = {
  children: PropTypes.element.isRequired,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string
  })
};

TextInputField.defaultProps = {
  label: '',
  meta: {
    touched: false,
    error: '',
    warning: ''
  }
};

export default TextInputField;
