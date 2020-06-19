import React from 'react';
import { Route, Switch } from 'react-router-dom';
import signUpContainer from './containers/signUpContainer';
import loginContainer from './containers/loginContainer';
import productContainer from './containers/productContainer';
import listProductsContainer from './containers/listProductsContainer'

import './App.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/signup" exact component={signUpContainer} />
        <Route path="/login" exact component={loginContainer} />
        <Route path="/create" exact component={productContainer} />
        <Route path="/products" exact component={listProductsContainer} />
      </Switch>
    </div>
  );
}

export default App;
