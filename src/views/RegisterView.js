import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core/';

import operations from '../redux/auth/authOperations';

const styles = {
  form: {
    width: 320,
  },
};

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.({ ...this.state });
//     this.setState;
//   };

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = useCallback(
    (name, email, password) =>
      dispatch(operations.register(name, email, password)),
    [dispatch],
  );

  const onChange = useCallback(event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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

      onRegister({ name, email, password });
      reset();
    },
    [onRegister, name, email, password],
  );

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={onSubmit} style={styles.form}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          type="text"
          value={name}
          onChange={onChange}
          placeholder="Enter name"
          style={{ width: '400px', marginBottom: '10px' }}
        ></TextField>

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
          Register
        </Button>
      </form>
    </div>
  );
}
