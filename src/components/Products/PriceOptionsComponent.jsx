import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'proptypes';
import Input from '../Input';

const PriceOptionsComponent = (props) => {
    const [options, setOptions] = useState({
        option: ""
    });
    const { success, error } = props;
    const handleChange = (event) => {
        setOptions({...options, [event.target.name]: event.target.value})
    }

    const [chipArray, setChipArray] = useState([])

    const handleKeyPress = (event) => {
        if(event.key === 'Enter' && options.option !== ""){
            setChipArray((prevArr) => [...prevArr, options.option])
            setOptions({
                ...options,
                option: ""                
            })
        }
    }

    const onPriceOptions = (event) => {
        event.preventDefault();
        const { priceOptionsAction } = props;
        priceOptionsAction({
            subtype_options: chipArray,
            price: options.price,
            quantity: options.quantity
        })
    }

    console.log(chipArray);

    return(
        <div id="body" className="create-product">
            <div className="form-content">
                {success ? <Redirect to={`/products`} /> : null}
                <form>
                    <Input
                        type="text"
                        name="option"
                        id="option"
                        placeholder="Subtype Options"
                        onChange={handleChange}
                        required
                        onKeyPress={handleKeyPress}
                        value={options.option}
                    />

                    <Input
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Price"
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="text" 
                        name="name" 
                        id="name" 
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
                <div>
                    {error ? <p id="error-message">{ error.error }</p> : null}                        
                </div>
            </div>
        </div> 
    );
}

PriceOptionsComponent.propTypes = {
    priceOptionsAction: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired,
}

export default PriceOptionsComponent;
