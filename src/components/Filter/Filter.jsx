import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/actions'

const Filter = ({ onChange, value }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter
})
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.filterContacts(e.target.value))
})
export default connect(mapStateToProps, mapDispatchToProps)(Filter);

