import { connect } from 'react-redux';
import { createProductAction } from '../actions/product.action';
import createProductComponent from '../components/Products/CreateProductComponent';

export const mapStateToProps = ({ productsReducer }) => {
    return (
        {
            createProduct: productsReducer.createProduct
        }
    )
}

export default connect(mapStateToProps, {
     createProductAction
})(createProductComponent);
