import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import brand from './brandSwitch/brandSwitchReducer';
import contactForm from './contactForm/contactFormReducer';

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  brand,
  contactForm
});
