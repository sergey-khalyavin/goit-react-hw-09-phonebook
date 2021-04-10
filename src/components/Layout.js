import React from 'react';
import NavBar from './NavBar';

const styles = {
  container: {
    width: '90vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 24px',
  },
};

const Layout = ({ children }) => (
  <div style={styles.container}>
    <NavBar />
    {children}
  </div>
);

export default Layout;
