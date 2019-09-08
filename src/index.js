import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RestrictedRoute from './containers/restricted-route';
import Options from './containers/options';
import Balance from './containers/balance';
import Withdraw from './containers/withdraw';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' exact component={App} />
        <RestrictedRoute path='/options' component={Options} redirectTo='/' />
        <RestrictedRoute path='/balance' component={Balance} redirectTo='/' />
        <RestrictedRoute path='/withdraw' component={Withdraw} redirectTo='/' />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
