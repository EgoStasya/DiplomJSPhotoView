import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { routes } from './routes';
import store from './store';

import './style.css';

window.localStorage.setItem('page', 0);
window.localStorage.setItem('perPage', 10);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
        ))}
      </Switch>
    </BrowserRouter>    
  </Provider>
), document.querySelector('#root'));
