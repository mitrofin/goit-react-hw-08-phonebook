import { connect } from 'react-redux';
import styles from './HomeView.module.css';
import { authSelectors } from '../../redux/auth';
import Modal from '../../components/Modal/Modal';
import Preloader from '../../components/Preloader/Preloader';

const HomeView = ({ userName, email, isAuthLoading }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Welcome to homepage, {userName ? userName : email ? email : 'Guest'}
      <span role="img" aria-label="Иконка приветствия">
        😃
      </span>
    </h1>
    {isAuthLoading && (
      <Modal>
        <Preloader />
      </Modal>
    )}
  </div>
);

const mapStateToProps = state => ({
  userName: authSelectors.getUserName(state),
  email: authSelectors.getEmail(state),
  isAuthLoading: authSelectors.getIsAuthLoading(state),
});

export default connect(mapStateToProps, null)(HomeView);
