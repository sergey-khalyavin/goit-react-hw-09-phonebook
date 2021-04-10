import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core/';

import operations from '../redux/auth/authOperations';

const styles = {
  form: {
    width: 320,
  },
};

export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = useCallback(
    (email, password) => dispatch(operations.logIn(email, password)),
    [dispatch],
  );

  const onChange = useCallback(event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }, []);

  const onSubmit = useCallback(
    event => {
      event.preventDefault();

      onLogin({ email, password });
      reset();
    },
    [onLogin, email, password],
  );

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={onSubmit} style={styles.form}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          value={email}
          onChange={onChange}
          placeholder="Enter email"
          style={{ width: '400px', marginBottom: '10px' }}
        ></TextField>

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          value={password}
          onChange={onChange}
          placeholder="Enter password"
          style={{ width: '400px', marginBottom: '10px' }}
        ></TextField>

        <Button
          variant="contained"
          color="primary"
          style={{ width: '400px' }}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
