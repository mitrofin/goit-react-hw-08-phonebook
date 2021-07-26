import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './ContactList.module.scss';
import contactListTransition from '../../transitionStyles/contactListTransition.module.scss';
import ContactListItem from '../ContactListItem/ContactListItem';

function ContactList({ contacts }) {
  return (
    <>
      <CSSTransition
        in={contacts.length > 0}
        appear={true}
        classNames={contactListTransition}
        timeout={500}
        unmountOnExit
      >
        <TransitionGroup component="ul" className={styles.contactsList}>
          {contacts.map((contact, idx) => (
            <CSSTransition
              key={contact.id}
              classNames={contactListTransition}
              timeout={250}
            >
              <ContactListItem idx={idx} contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </CSSTransition>
    </>
  );
}

const getFilteredContactsList = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const visibleContacts = getFilteredContactsList(items, filter);
  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps, null)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
