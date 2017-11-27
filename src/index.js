import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './state/store';
import './index.css';
import App from './containers/App';

ReactDOM.render(
  React.createElement(
    Provider,
    { store },
    React.createElement(
      ConnectedRouter,
      { history },
      React.createElement(withRouter(App))
    )
  ),
  document.getElementById('root')
);
