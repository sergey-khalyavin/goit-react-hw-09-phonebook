import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { authSelectors } from '../redux/auth';
import routes from '../routes';
import s from './App.module.css';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#fff',
  },
  activeLink: {
    color: '#7fff61',
    fontSize: '16px',
  },
  title: {
    color: '#f8d017',
    fontSize: '20px',
    textTransform: 'uppercase',
    padding: '0 4px',
    marginRight: '10px',
    boxShadow: '0 0 0 10px #f8d017',
    borderRadius: '5px',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
  },
};

const Navigation = ({ isAuthenticated }) => (
  <div style={styles.box}>
    <CSSTransition in={true} appear timeout={500} classNames={s} unmountOnExit>
      <h2 style={styles.title}>Phonebook</h2>
    </CSSTransition>

    <nav>
      <NavLink
        to={routes.home}
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to={routes.contacts}
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
