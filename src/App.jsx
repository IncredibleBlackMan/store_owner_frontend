import React from 'react';
import { Route, Switch } from 'react-router-dom';
import signUpContainer from './containers/signUpContainer';
import loginContainer from './containers/loginContainer';
import createProductContainer from './containers/createProductContainer';
import singleProductContainer from './containers/singleProductContainer';
import listProductsContainer from './containers/listProductsContainer';
import createOptionsContainer from './containers/createOptionsContainer';

import './App.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/signup" exact component={signUpContainer} />
        <Route path="/login" exact component={loginContainer} />
        <Route path="/create" exact component={createProductContainer} />
        <Route path="/products" exact component={listProductsContainer} />
        <Route path="/products/:id" exact component={singleProductContainer} />
        <Route path="/products/:product_id/subtypes/:subtype_id/subtype_options" exact component={createOptionsContainer} />
      </Switch>
    </div>
  );
}

export default App;
