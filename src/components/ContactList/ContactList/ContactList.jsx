import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactItem from '../ContactItem';
import { setDataToLocalStorage } from '../../../utils/utils';

const ContactList = ({ contacts }) => {

  useEffect(() => {
    setDataToLocalStorage(contacts);
  },[contacts]);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />))}
    </ul>
  );
};

const mapStateToProps = ({ contacts: {items, filter}}) => ({
  contacts: items.filter(
    item => item.name.toLowerCase().includes(filter.toLowerCase())
  )
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};
