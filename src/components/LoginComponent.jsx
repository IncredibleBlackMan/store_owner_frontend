import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'proptypes';
import Input from './Input';

const LoginComponent = (props) => {
    const [loginDetails, setLoginDetails] = useState({});
    const { success, error } = props;

    const handleChange = (event) => {
        setLoginDetails({...loginDetails, [event.target.name]: event.target.value})
    }

    const onLogin = (event) => {
        event.preventDefault();
        const { login } = props;
        login(loginDetails)
    }
    
    return(
        <div id="body" className="login-body">
            <div className="form-content">
                {success ? <Redirect to={"/products"} /> : null}
                <form onSubmit={onLogin}>
                    <Input
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />

                    <Input 
                        type="submit"
                        value= "Login"
                        className="submit-btn"
                    />
                </form>
                <div>
                    {error ? <p id="error-message">{ error.error }</p> : null}                        
                </div>
            </div>
        </div>
    );

}

LoginComponent.propTypes = {
    login: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired,
    error: PropTypes.shape({}).isRequired,
}

export default LoginComponent;
