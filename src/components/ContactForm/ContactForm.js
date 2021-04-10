import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core/';

import contactsOperations from '../../redux/contacts/contactsOperations';

import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const updateContacts = evt => {
    if (error) {
      setError(null);
    }
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return null;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const getSameName = name => {
    return contacts.some(contacts => contacts.name === name.trim());
  };

  // const updateName = evt => {
  //   setName(evt.target.value);
  // };

  // const updateNumber = evt => {
  //   setNumber(evt.target.value);
  // };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (name === '') {
      setError('Add name please');
      reset();
      return;
    }

    if (getSameName(name)) {
      setError(`${name.trim()} is already in contacts`);
      reset();
      return;
    }

    dispatch(contactsOperations.addContact({ name, number }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        type="text"
        value={name}
        onChange={updateContacts}
        placeholder="Enter name"
        style={{ width: '100%', marginBottom: '10px' }}
      ></TextField>
      <TextField
        id="outlined-basic"
        label="Number"
        variant="outlined"
        name="number"
        type="number"
        value={number}
        onChange={updateContacts}
        placeholder="Enter number"
        style={{ width: '100%', marginBottom: '10px' }}
      ></TextField>
      {error ? (
        <p>{error}</p>
      ) : (
        <Button
          variant="contained"
          color="primary"
          style={{ width: '100%' }}
          type="submit"
        >
          Add contact
        </Button>
      )}
    </form>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     this.props.onAddContact(name, number);

//     this.setState({ name: '', number: '' });
//   };

//   handleChange = e => {
//     const { name, value } = e.target;

//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={s.form}>
//         <TextField
//           id="outlined-basic"
//           label="Name"
//           variant="outlined"
//           name="name"
//           type="text"
//           value={this.state.name}
//           onChange={this.handleChange}
//           placeholder="Enter name"
//           style={{ width: '100%', marginBottom: '10px' }}
//         ></TextField>
//         <TextField
//           id="outlined-basic"
//           label="Number"
//           variant="outlined"
//           name="number"
//           type="text"
//           value={this.state.number}
//           onChange={this.handleChange}
//           placeholder="Enter number"
//           style={{ width: '100%', marginBottom: '10px' }}
//         ></TextField>

//         <Button
//           variant="contained"
//           color="primary"
//           style={{ width: '100%' }}
//           type="submit"
//         >
//           Add contact
//         </Button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onAddContact: contactsOperations.addContact,
// };

// export default connect(null, mapDispatchToProps)(ContactForm);
