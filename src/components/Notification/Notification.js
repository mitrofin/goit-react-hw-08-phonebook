import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import notificationTransitionStyles from '../../transitionStyles/notificationTransition.module.scss';
import styles from './Notification.module.scss';

const Notification = ({ message, notificationInit }) => (
  <CSSTransition
    in={notificationInit}
    timeout={250}
    classNames={notificationTransitionStyles}
    unmountOnExit
  >
    <div className={styles.wrapper}>
      <p className={styles.message}>{message}</p>
    </div>
  </CSSTransition>
);

export default Notification;

Notification.propTypes = PropTypes.shape({
  message: PropTypes.string.isRequired,
  isContactExists: PropTypes.bool.isRequired,
}).isRequired;
