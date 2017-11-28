import {
  createStore,
  applyMiddleware
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export const history = createHistory();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);

export default store;
