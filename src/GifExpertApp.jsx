import React, { useState } from 'react';
import AddCategory from './components/addCategory';

const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['Goku', 'Ironman', 'Spiderman']);

    const handleAdd = () => {
        setCategories([ 'nueva categoria', ...categories]);
    }

    return (
        <>
            <h2>GiffExpertApp</h2>
            <AddCategory/>
            <hr />

            <button onClick={ handleAdd }>Agregar categoría</button>

            <ol>
                {
                    categories.map(category => {
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>
        </>
    )
}

export default GiffExpertApp;