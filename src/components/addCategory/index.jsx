import React, { useState } from 'react';

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('enviado bebe')
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

export default AddCategory;