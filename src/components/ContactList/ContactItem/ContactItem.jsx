import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeContact } from '../../../redux/contacts/contacts-actions';
import ListItem from './ContactItem.styled';

const ContactItem = ({ id, name, number, contactRemoving }) => {
  return (
    <ListItem>
      <span>{`${name}: ${number}`}</span>
      <button type="button" onClick={() => contactRemoving(id)}>
        Delete
      </button>
    </ListItem>
  );
};

const mapDispatchToProps = dispatch => ({
  contactRemoving: id => dispatch(removeContact(id))
});

export default connect(null,mapDispatchToProps)(ContactItem);

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  contactRemoving: PropTypes.func,
};
