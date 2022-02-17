import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/actions';
import s from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(el => (
        <li className={s.item} key={el.id}>
          <h3 className={s.name}>{el.name}</h3>
          <p className={s.number}>{el.number}</p>
          <button
            className={s.buttom}
            type="button"
            onClick={() => removeContact(el.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return { contacts: visibleContacts };
};

const mapDispatchToProps = dispatch => ({
  removeContact: id => dispatch(contactsActions.removeContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};