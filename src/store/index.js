import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsCreators and other options if needed here
});

const storeConfig = () => {
    const middlewares = [
        thunkMiddleware,
    ];

    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(...middlewares)
        ),
    );

    return store;
}

export default storeConfig;
