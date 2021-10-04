import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts, contactRemoving }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          contactRemoving={contactRemoving}
        />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  contactRemoving: PropTypes.func.isRequired,
};
