import axios from 'axios';

import contactsActions from './contactsActions';

const addContact = (name, number) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(({ message }) => dispatch(contactsActions.addContactError(message)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch(({ message }) =>
      dispatch(contactsActions.fetchContactsError(message)),
    );
};

const removeContact = id => dispatch => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch(({ message }) =>
      dispatch(contactsActions.removeContactError(message)),
    );
};

export default {
  addContact,
  fetchContacts,
  removeContact,
};
