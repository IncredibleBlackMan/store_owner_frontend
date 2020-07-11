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
                                        <h1><a href={`/products/${product.product_id}`}>{product.product_name}</a></h1>
                                        <p>Total Units: {product.quantity}</p>
                                        
                                                
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Sub-Type</th>
                                                                <th>Price</th>
                                                                <th>Quantity</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {product.subtype_options.map(option => (
                                                                <tr>
                                                                <td>
                                                                    {option.subtype_options.map(option_price => (
                                                                        <span>{option_price.subtype_name} : {option_price.name}</span>
                                                                    ))}
                                                                </td>
                                                                <td>{option.price}</td>
                                                                <td>{option.quantity}</td>
                                                            </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                            </div>
                                ))
                            }
                        </div>
                    ) : <div className="no-data"><p>You have not created any products yet</p></div>
                }
                <a href="/create">Create Products</a>
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
