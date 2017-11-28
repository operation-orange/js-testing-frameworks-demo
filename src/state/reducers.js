import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import brand from './brandSwitch/brandSwitchReducer';

export default combineReducers({
  router: routerReducer,
  brand
});
