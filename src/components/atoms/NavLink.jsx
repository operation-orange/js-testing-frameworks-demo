import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ children, qaId, ...otherProps }) => (
  <RouterNavLink
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
  qaId: PropTypes.string
};

NavLink.defaultProps = {
  children: null,
  qaId: null
};

export default NavLink;
