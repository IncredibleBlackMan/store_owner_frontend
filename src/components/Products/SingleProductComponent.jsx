import React, { useEffect } from 'react';
import PropTypes from 'proptypes';

const SingleProductComponent = (props) => {
    const {  product, fetchProductAction, match } = props;

    useEffect(() => {
        const { id } = match.params;
        fetchProductAction(id);
    }, [fetchProductAction, match.params])
    
    return(
        <div className="container">
            <h1>{product.name}</h1>
            {product.subtypes
                ? (
                    <div>
                        {product.subtypes.map(subtype => (
                            <div>
                                <h3>
                                    <a href={`/products/${subtype.product_id}/subtypes/${subtype.id}/subtype_options`}>{subtype.name}</a>
                                </h3>
                                <div>
                                    {subtype.subtype_options.map(option => (
                                        <p>
                                            {option.name}
                                        </p>
                                    ))}
                                </div>
                                 
                            </div>
                                                      
                        ))}
                    </div>
                ) : <div className="no-data"><p>No subtypes available.</p></div>
            }
        </div>
    );
}

SingleProductComponent.propTypes = {
    fetchProductAction: PropTypes.func.isRequired,
    product: PropTypes.shape({}).isRequired,
};

export default SingleProductComponent;
