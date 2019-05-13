import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  // Navbar links to display if logged in
  const authLinks = (
    <ul>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{" "}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link onClick={logout} to='#!'>
          <i className='fas fa-sign-out-alt' />{" "}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </ul>
  );

  // Navbar links to display if not logged in
  const guestLinks = (
    <ul>
      <li>
        <Link to='#!'>Developers</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' /> DevConnector
        </Link>
      </h1>
      {/* If info is loaded (not loading) then display either authLinks or guestLinks, otherwise ignore*/}
      {!loading ? (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      ) : null}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
