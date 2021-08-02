import { NavLink } from 'react-router-dom';
import { pathes } from '../../routes';
import styles from './AuthMenu.module.scss';

const AuthMenu = () => (
  <>
    <nav className={styles.authNav}>
      <NavLink
        exact
        to={pathes.registerPage}
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
      >
        Register
      </NavLink>
      <NavLink
        exact
        to={pathes.loginPage}
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
      >
        Log In
      </NavLink>
    </nav>
  </>
);

export default AuthMenu;
