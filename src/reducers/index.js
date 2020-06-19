import { combineReducers } from 'redux';
import signUpReducer from './signup.reducer';
import loginReducer from './login.reducer';
import productsReducer from './products.reducers';
import optionsReducer from './options.reducers';

const rootReducer = combineReducers({
    signUpReducer,
    loginReducer,
    productsReducer,
    optionsReducer,
});

export default rootReducer;
