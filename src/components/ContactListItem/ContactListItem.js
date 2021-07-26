import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookOperations from '../../redux/phoneBook/phoneBook-operations';
import styles from './ContactListItem.module.scss';

const ContactListItem = ({ idx, contact, onDeleteButtonClick }) => {
  const { id, name, number } = contact;
  return (
    <li key={id} className={idx % 2 === 0 ? styles.even : styles.odd}>
      <span>
        {name}: {number}
      </span>
      <button
        type="button"
        id={contact.id}
        className={styles.deleteButton}
        onClick={() => onDeleteButtonClick(id)}
      >
        Delete
      </button>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  onDeleteButtonClick: id => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = PropTypes.shape({
  idx: PropTypes.number.isRequired,
  contact: PropTypes.object.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
}).isRequired;
