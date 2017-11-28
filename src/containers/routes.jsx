import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Contact from './Contact/Contact';

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
