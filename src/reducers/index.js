import { combineReducers } from 'redux';
import signUpReducer from './signup.reducer';
import loginReducer from './login.reducer'

const rootReducer = combineReducers({
    signUpReducer,
    loginReducer,
});

export default rootReducer;
