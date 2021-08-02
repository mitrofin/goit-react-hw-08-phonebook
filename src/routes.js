import { lazy } from 'react';

export const pathes = {
  homePage: '/',
  loginPage: '/login',
  registerPage: '/register',
  contacts: '/contacts',
  editContact: '/contacts/:contactId',
};

const HomeView = lazy(() => import('./views/HomeView/HomeView.js'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView.js'));
const LogInView = lazy(() => import('./views/LoginView/LoginView.js'));
const EditContactView = lazy(() =>
  import('./views/EditContactView/EditContactView.js'),
);

export const routes = [
  {
    name: 'Home',
    path: pathes.homePage,
    exact: true,
    component: HomeView,
    private: false,
    restricted: false,
    redirectTo: pathes.homePage,
  },
  {
    name: 'Contacts',
    path: pathes.contacts,
    exact: true,
    component: ContactsView,
    private: true,
    restricted: false,
    redirectTo: pathes.loginPage,
  },
  {
    name: 'Registration',
    path: pathes.registerPage,
    exact: true,
    showInMenu: true,
    component: RegisterView,
    private: false,
    restricted: true,
    redirectTo: pathes.contacts,
  },
  {
    name: 'LogIn',
    path: pathes.loginPage,
    exact: true,
    component: LogInView,
    private: false,
    restricted: true,
    redirectTo: pathes.contacts,
  },
  {
    name: 'ContactEditor',
    path: pathes.editContact,
    exact: true,
    component: EditContactView,
    private: true,
    restricted: false,
    redirectTo: pathes.contacts,
  },
];

/* export default { pathes, routes }; */
