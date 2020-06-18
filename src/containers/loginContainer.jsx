import { connect } from 'react-redux';
import login from '../actions/login.action';
import loginComponent from '../components/loginComponent';

export const mapStateToProps = ({ loginReducer }) => ({ ...loginReducer });

export default connect(
    mapStateToProps,
    { login },
)(loginComponent);
