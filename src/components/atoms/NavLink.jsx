import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavLink = ({
  children,
  className,
  qaId,
  ...otherProps
}) => (
  <RouterNavLink
    className={classNames('NavLink', className)}
    data-qa-id={qaId}
    activeClassName="active"
    exact
    {...otherProps}
  >
    {children}
  </RouterNavLink>
);

NavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  qaId: PropTypes.string
};

NavLink.defaultProps = {
  children: null,
  className: null,
  qaId: null
};

export default NavLink;
