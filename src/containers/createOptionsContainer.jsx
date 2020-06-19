import { connect } from 'react-redux';
import { createOptionsAction } from '../actions/subtype.action';
import createOptionsComponent from '../components/Products/CreateOptionsComponent';

export const mapStateToProps = ({ optionsReducer }) => ({ ...optionsReducer });

export default connect(mapStateToProps, {
     createOptionsAction
})(createOptionsComponent);
