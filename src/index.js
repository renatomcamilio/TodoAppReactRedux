import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

window.React = React;

render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      // <IndexRoute component={Home} />
      // <Route path="/create-recipe" component={RecipeForm} />
    </Route>
  </Router>),
  document.getElementById('container')
);
