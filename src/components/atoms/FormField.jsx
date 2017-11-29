import React from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({
  children,
  input,
  label,
  qaId,
  meta: { touched, error, warning }
}) => {
  const clonedChild = React.cloneElement(children, { id: input.name, 'data-qa-id': qaId, ...input });

  return (
    <div>
      <label htmlFor={input.name}>{label}</label>
      <div>
        {clonedChild}
        {touched &&
          ((error && <div>{error}</div>) ||
            (warning && <div>{warning}</div>))}
      </div>
    </div>
  );
};

TextInputField.propTypes = {
  children: PropTypes.element.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }),
  label: PropTypes.string,
  qaId: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string
  })
};

TextInputField.defaultProps = {
  input: {
    name: null,
    onBlur: null,
    onChange: null,
    onDragStart: null,
    onDrop: null,
    onFocus: null,
    value: null
  },
  label: '',
  qaId: null,
  meta: {
    touched: false,
    error: '',
    warning: ''
  }
};

export default TextInputField;
