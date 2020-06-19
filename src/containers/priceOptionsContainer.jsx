import { connect } from 'react-redux';
import { priceOptionsAction } from '../actions/subtype.action';
import priceOptionsComponent from '../components/Products/PriceOptionsComponent';

export const mapStateToProps = ({ optionsReducer }) => ({ ...optionsReducer });

export default connect(mapStateToProps, {
     priceOptionsAction
})(priceOptionsComponent);
