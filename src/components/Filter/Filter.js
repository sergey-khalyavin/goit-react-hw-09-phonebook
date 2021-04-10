import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import contactsSelectors from '../../redux/contacts/contactsSelectors';
import contactsActions from '../../redux/contacts/contactsActions';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Find contacts by name:"
        variant="outlined"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
        placeholder="Name"
        size="small"
        style={{ width: '440px', marginTop: '10px' }}
      ></TextField>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
