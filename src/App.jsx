import React from 'react';
import { Route, Switch } from 'react-router-dom';
import signUpContainer from './containers/signUpContainer';

import './App.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/signup" exact component={signUpContainer} />
      </Switch>
    </div>
  );
}

export default App;
