import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,

    width: '80vw',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const NavBar = ({ isAuthenticated }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ background: '#009688' }}>
      <Toolbar className={classes.root}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(NavBar);
