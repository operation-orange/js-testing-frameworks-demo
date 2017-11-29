import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './FormField.css';

const FormField = ({
  children,
  className,
  input,
  label,
  qaId,
  meta: { touched, error, warning }
}) => {
  const clonedChild = React.cloneElement(children, {
    id: input.name,
    className: classNames('FormField__field', children.props.className),
    'data-qa-id': qaId,
    ...input
  });

  return (
    <div className={classNames('FormField', className)}>
      <label className="FormField__label" htmlFor={input.name} data-qa-id={`${qaId}-label`}>{label}</label>
      <div>
        {clonedChild}
        {touched &&
          ((error && <div className="FormField__error" data-qa-id={`${qaId}-error`}>{error}</div>) ||
            (warning && <div className="FormField__warning" data-qa-id={`${qaId}-warning`}>{warning}</div>))}
      </div>
    </div>
  );
};

FormField.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
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

FormField.defaultProps = {
  className: null,
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

export default FormField;
