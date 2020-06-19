import { connect } from 'react-redux';
import { listProducts } from '../actions/product.action';
import listProductsComponent from '../components/Products/ListProductsComponent';

export const mapStateToProps = ({ productsReducer }) => ({ ...productsReducer.listProducts });

export default connect(
    mapStateToProps,
    { listProducts },
)(listProductsComponent);
