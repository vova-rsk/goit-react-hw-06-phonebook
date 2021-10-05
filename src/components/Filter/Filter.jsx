import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Label from './Filter.styled';
import { changeFilter } from '../../redux/contacts/contacts-actions';

const Filter = ({ filter, filterChanging }) => {
  return (
    <Label>
      Find contacts by name
      <input type="text"
        name="filter"
        onChange={e => filterChanging(e.target.value.trim())}
        value={filter}
      />
    </Label>
  );
};

const mapStateToProps = state => ({ filter: state.contacts.filter });

const mapDispatchToProps = dispatch => ({
  filterChanging: filter => dispatch(changeFilter(filter))
});

export default connect(mapStateToProps,mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChanging: PropTypes.func.isRequired,
};
