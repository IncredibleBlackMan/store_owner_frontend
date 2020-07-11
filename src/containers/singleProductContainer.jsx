import { connect } from 'react-redux';
import { fetchProductAction } from '../actions/product.action';
import { priceOptionsAction } from '../actions/subtype.action';
import SingleProductComponent from '../components/Products/SingleProductComponent';

export const mapStateToProps = ({ productsReducer }) => ({ ...productsReducer.fetchProduct });

export default connect(
    mapStateToProps,
    { fetchProductAction, priceOptionsAction },
)(SingleProductComponent);
