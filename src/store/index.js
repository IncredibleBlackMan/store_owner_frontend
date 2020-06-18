import {
    createStore,
    applyMiddleware,
  } from 'redux';
  import { composeWithDevTools } from 'redux-devtools-extension';
  import thunkMiddleware from 'redux-thunk';
  import { createPromise } from 'redux-promise-middleware';
  import logger from 'redux-logger';
  import rootReducer from '../reducers';
  
  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsCreators and other options if needed here
  });

  const authMiddleWare  = () => next => action => {
    if (!action) return;
    if (action.type === "LOGIN_FULFILLED") {
      const token = action.payload.data.auth_token
      localStorage.setItem('user', JSON.stringify(token));
    }
    if (action.type === "LOGOUT_FULFILLED") {
      localStorage.removeItem('user');
    }
    return next(action);
  }
  
  const storeConfig = () => {
    const middlewares = [
      thunkMiddleware,
      createPromise(),
      logger,
      authMiddleWare,
    ];

    const store = createStore(
      rootReducer,
      {},
      composeEnhancers(
        applyMiddleware(...middlewares),
      ),
    );
    
    return store;
  };
  
  export default storeConfig;
  