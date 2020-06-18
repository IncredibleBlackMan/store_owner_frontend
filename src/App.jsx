import React from 'react';
import { Route, Switch } from 'react-router-dom';
import signUpContainer from './containers/signUpContainer';
import loginContainer from './containers/loginContainer';

import './App.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/signup" exact component={signUpContainer} />
        <Route path="/login" exact component={loginContainer} />
      </Switch>
    </div>
  );
}

export default App;
