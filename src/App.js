import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Options from './components/options';
import Balance from './components/balance';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/options' component={Options} />
          <Route path='/balance' component={Balance} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
