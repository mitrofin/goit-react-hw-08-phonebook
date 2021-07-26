import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  errorRemover,
} from './phoneBook-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const resetError = dispatch =>
  setTimeout(() => dispatch(errorRemover(null)), 3000);

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    return dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
    resetError(dispatch);
  }
};

const addContact = contactObj => async dispatch => {
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contactObj);
    return dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
    resetError(dispatch);
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    return dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error.message));
    resetError(dispatch);
  }
};

export default { addContact, deleteContact, fetchContacts };
