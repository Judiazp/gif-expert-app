import React, { useState } from 'react';
import AddCategory from './components/addCategory';

const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['Goku', 'Ironman', 'Spiderman']);

    return (
        <>
            <h2>GiffExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

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