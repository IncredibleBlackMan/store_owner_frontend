import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'proptypes';
import Input from './input';

class SignUpComponent extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    onSignUp = (event) => {
        event.preventDefault();
        const { password, confirm_password } = this.state;
        if (password === confirm_password) {
          const { signup } = this.props;
          signup(this.state);
        } else {
          this.setState({ passwordError: 'Passwords don\'t match.' });
        }
      }

    render () {
        const { success, error } = this.props;
        const { errors } = error ? error.response.data : { errors: '' };
        const { username, email, password, confirm_password } = this.state;
        return(
            <div id="body" className="signup-body">
                <div className="form-content">
                    {success ? <Redirect to="/login" /> : null}
                    <form onSubmit={this.onSignUp}>
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            onChange={this.handleChange}
                            value={username}
                            required
                        />

                        <Input
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Email"
                            onChange={this.handleChange}
                            value={email}
                            required
                        />

                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={password}
                            required
                        />

                        <Input 
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="Confirm Password"
                            onChange={this.handleChange}
                            value={confirm_password}
                            required
                        />

                        <Input 
                            type="submit"
                            value= "Sign Up"
                            className="submit-btn"
                        />
                    </form>
                    <div>
                        {error ? <p id="error-message">{ errors }</p> : null}                        
                    </div>
                </div>
                <div className="page-info">
                    <p>Already have an account? <a href="login.html">Log in</a></p>
                </div>
            </div>
        );
    }
}

SignUpComponent.propTypes = {
    signup: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired,
};

export default SignUpComponent;
