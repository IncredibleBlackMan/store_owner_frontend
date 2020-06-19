import { combineReducers } from 'redux';
import signUpReducer from './signup.reducer';
import loginReducer from './login.reducer';
import productsReducer from './products.reducers';

const rootReducer = combineReducers({
    signUpReducer,
    loginReducer,
    productsReducer,
});

export default rootReducer;
