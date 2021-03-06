import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Container } from '@material-ui/core';
import Navigation from '../Navigation/Navigation';
import styles from './AppBar.module.scss';
import appBarTransitionStyles from '../../transitionStyles/appBarTransitionStyles.module.scss';
import UserMenu from '../UserMenu/UserMenu';
import AuthMenu from '../AuthMenu/AuthMenu';
import authSelectors from '../../redux/auth/auth-selectors';

const AppBar = ({ isAuthenticated }) => {
  return (
    <CSSTransition
      in={true}
      appear
      classNames={appBarTransitionStyles}
      timeout={500}
      unmountOnExit
    >
      <Container maxWidth="xl">
        <header className={styles.siteHeader}>
          <Navigation />
          {isAuthenticated ? <UserMenu /> : <AuthMenu />}
        </header>
      </Container>
    </CSSTransition>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
