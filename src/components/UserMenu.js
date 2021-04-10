import React from 'react';
import { connect } from 'react-redux';

import { authOperations, authSelectors } from '../redux/auth';
import Button from '@material-ui/core/Button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <Button
      variant="contained"
      color="secondary"
      disableElevation
      onClick={onLogout}
    >
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456324.png',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
