import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { pathes } from '../../routes';
import { authSelectors } from '../../redux/auth';

import styles from './Navigation.module.scss';

const Navigation = ({ isAuthenticated }) => {
  return (
    <>
      <nav className={styles.siteNav}>
        <NavLink
          exact
          to={pathes.homePage}
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
        >
          Home
        </NavLink>
        {isAuthenticated && (
          <NavLink
            exact
            to={pathes.contacts}
            className={styles.navLink}
            activeClassName={styles.activeNavLink}
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(Navigation);
