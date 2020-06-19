import { connect } from 'react-redux';
import { createProduct } from '../actions/product.action';
import createProductComponent from '../components/Products/CreateProductComponent';

export const mapStateToProps = ({ productReducer }) => ({ ...productReducer });

export default connect(
    mapStateToProps,
    { createProduct },
)(createProductComponent);
