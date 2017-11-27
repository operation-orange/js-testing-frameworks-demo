import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';

import brand from './brandSwitch/brandSwitchReducer';

export const history = createHistory();

const reducers = combineReducers({
  router: routerReducer,
  brand
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);

export default store;
