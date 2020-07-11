import React, { useEffect, useState } from 'react';
import PropTypes from 'proptypes';
import Input from '../Input';

const SingleProductComponent = (props) => {
    const {  product, fetchProductAction, match } = props;

    const [options, setOptions] = useState({});
    const handleChange = (event) => {
        setOptions({...options, [event.target.name]: event.target.value})
    }

    const [values, setValues] = useState({})

    const handleOptionSelect = (event) => {
        event.persist()
        setValues((prevValue) => {return{...prevValue, [event.target.name.toLowerCase()]: event.target.value}})
    }

    const onPriceOptions = (event) => {
        event.preventDefault();
        const { priceOptionsAction, match } = props;
        priceOptionsAction(
        match.params.id,
        {
            subtype_options: [values.size, values.color],
            price: options.price,
            quantity: options.quantity
        }
        )
    }

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
                            <div key={Math.random()}>
                                <h3>
                                    <a href={`/products/${product.product_id}/subtypes/${subtype.id}/subtype_options`}>{subtype.name}</a>
                                </h3>
                                <div>
                                    {subtype.subtype_options.map(option => (
                                        <button name={subtype.name} onClick={handleOptionSelect} key={option.id} value={option.id}>
                                            {option.name}
                                        </button>
                                    ))}
                                </div>
                                 
                            </div>
                                                      
                        ))}

                    <form>
                        <Input
                            type="text" 
                            name="price" 
                            id="price" 
                            placeholder="Price"
                            onChange={handleChange}
                            required
                        />

                        <Input
                            type="text" 
                            name="quantity" 
                            id="quantity" 
                            placeholder="Quantity"
                            onChange={handleChange}
                            required
                        />

                        <Input 
                            type="button"
                            value= "Save"
                            className="submit-btn"
                            onClick={onPriceOptions}
                        />
                    </form>
                    </div>
                ) : <div className="no-data"><p>No subtypes available.</p></div>
            }
            <a href="/products">Products</a>
        </div>
    );
}

SingleProductComponent.propTypes = {
    fetchProductAction: PropTypes.func.isRequired,
    product: PropTypes.shape({}).isRequired,
};

export default SingleProductComponent;
