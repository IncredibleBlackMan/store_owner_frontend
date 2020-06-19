import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'proptypes';
import Input from '../Input';

const CreateProductComponent = (props) => {
    const [productDetails, setProductDetails] = useState({
        subtype: ""
    });
    const { createProduct } = props;
    const { success, error, product} = createProduct;
    const handleChange = (event) => {
        setProductDetails({...productDetails, [event.target.name]: event.target.value})
    }

    const [chipArray, setChipArray] = useState([])

    const handleKeyPress = (e) => {
        if(e.key === 'Enter' && productDetails.subtype !== ""){
            setChipArray((prevArr) => [...prevArr, productDetails.subtype])
            setProductDetails({
                ...productDetails,
                subtype: ""                
            })
        }
    }

    const onCreateProduct = (event) => {
        event.preventDefault();
        const { createProductAction } = props;
        createProductAction({
            name: productDetails.name,
            subtypes: chipArray
        })
    }    


    return(
        <div id="body" className="create-product">
            <div className="form-content">
                {success ? <Redirect to={`/products/${product.id}`} /> : null}
                <form>
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
                        name="subtype"
                        id="subtype"
                        placeholder="Subtypes"
                        onChange={handleChange}
                        required
                        onKeyPress={handleKeyPress}
                        value={productDetails.subtype}
                    />

                    <Input 
                        type="button"
                        value= "Save"
                        className="submit-btn"
                        onClick={onCreateProduct}
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
    createProduct: PropTypes.shape({
        success: PropTypes.bool.isRequired,
    }).isRequired
}

export default CreateProductComponent;
