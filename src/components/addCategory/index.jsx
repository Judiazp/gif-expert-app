import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        if (inputValue.trim().length >= 3) {
            setCategories(categories =>[ inputValue, ...categories]);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Busquemos gifs"
                onChange= { handleChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;