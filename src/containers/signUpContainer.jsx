import { connect } from 'react-redux';
import signup from '../actions/signup.action';
import signUpComponent from '../components/signUpComponent';

export const mapStateToProps = ({ signUpReducer }) => signUpReducer;

export default connect(
    mapStateToProps,
    { signup },
)(signUpComponent);
