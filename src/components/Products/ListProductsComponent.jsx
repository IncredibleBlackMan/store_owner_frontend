import React, { useEffect } from 'react';
import PropTypes from 'proptypes';

const ListProductsComponent = (props) => {
    const { products, listProducts } = props;
    
    useEffect(() => {
        listProducts();
    }, [listProducts]);

    return (
        <div>
            <div className="products container">
                {products.length !== 0
                    ? (
                        <div>
                            {
                                products.map(product => (
                                    <div>
                                        <h1>{product.product_name}</h1>
                                        <p>Total Units: {product.quantity}</p>
                                        <table>
                                            <tr>
                                                <th>Sub-Type</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {product.subtype_options.map(option =>(
                                                        <span>{option.subtype_name} : {option.name}</span>
                                                    ))
                                                    }
                                                </td>
                                                <td>{product.price}</td>
                                                <td>{product.quantity}</td>
                                            </tr>
                                        </table>
                                    </div>
                                ))
                            }
                        </div>
                    ) : <div className="no-data"><p>You have not created any products yet</p></div>
                }
            </div>
        </div>
    );
}

ListProductsComponent.propTypes = {
    listProducts: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(PropTypes.object),
}

ListProductsComponent.defaultProps = {
    products: [],
};

export default ListProductsComponent;
