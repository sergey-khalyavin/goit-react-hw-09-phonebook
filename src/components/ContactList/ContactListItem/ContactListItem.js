import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import contactsSelectors from '../../../redux/contacts/contactsSelectors';
import contactsOperations from '../../../redux/contacts/contactsOperations';

import s from './ContactListItem.module.css';

const ContactListItem = ({ name, id, number, onRemove }) => {
  return (
    <li key={id} className={s.item}>
      <p className={s.name}>{name}:</p>
      <p>{number}</p>
      <section className={s.sect__btn}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={onRemove}
        >
          Delete
        </Button>
      </section>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactsById(state, ownProps.id);
  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
