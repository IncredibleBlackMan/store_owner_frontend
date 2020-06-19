import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'proptypes';
import Input from '../Input';

const CreateProductComponent = (props) => {
    const [productDetails, setProductDetails] = useState({});
    const { success, error } = props;

    const handleChange = (event) => {
        setProductDetails({...productDetails, [event.target.name]: event.target.value})
    }

    const handleSubtypeChange = (event) => {
        setProductDetails({...productDetails, [event.target.name]: [event.target.value]})
    }

    const onCreateProduct = (event) => {
        event.preventDefault();
        const { createProduct } = props;
        createProduct(productDetails)
    }

    return(
        <div id="body" className="create-product">
            <div className="form-content">
                {success ? <Redirect to="/login.html" /> : null}
                <form onSubmit={onCreateProduct}>
                    <Input
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Name"
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="text"
                        name="subtypes"
                        id="subtypes"
                        placeholder="Subtypes"
                        onChange={handleSubtypeChange}
                        required
                    />

                    <Input 
                        type="submit"
                        value= "Save"
                        className="submit-btn"
                    />
                </form>
                <div>
                    {error ? <p id="error-message">{ error.error }</p> : null}                        
                </div>
            </div>
        </div> 
    );
}

CreateProductComponent.propTypes = {
    createProduct: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired,
    error: PropTypes.shape({}).isRequired,
}

export default CreateProductComponent;
