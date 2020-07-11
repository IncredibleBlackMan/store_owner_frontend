import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'proptypes';
import Input from '../Input';

const CreateOptionsComponent = (props) => {
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

    const onCreateOptions = (event) => {
        event.preventDefault();
        const { createOptionsAction, match } = props;
        createOptionsAction(
            match.params.product_id,
            match.params.subtype_id,
            chipArray
        )
    }

    console.log (chipArray);

    return(
        <div id="body" className="create-product">
            <div className="form-content">
                {success ? <Redirect to="/products" /> : null}
                <form>
                    <Input
                        type="text"
                        name="option"
                        id="option"
                        placeholder="Subtypes"
                        onChange={handleChange}
                        required
                        onKeyPress={handleKeyPress}
                        value={options.option}
                    />

                    <Input 
                        type="button"
                        value= "Save"
                        className="submit-btn"
                        onClick={onCreateOptions}
                    />
                </form>
                <div>
                    {error ? <p id="error-message">{ error.error }</p> : null}                        
                </div>
            </div>
        </div> 
    );
}

CreateOptionsComponent.propTypes = {
    createOptionsAction: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired,
}

export default CreateOptionsComponent;
