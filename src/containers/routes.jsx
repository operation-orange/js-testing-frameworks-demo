import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
