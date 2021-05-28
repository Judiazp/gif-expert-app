import React, { useState } from 'react';
import AddCategory from './components/addCategory';
import GifGrid from './components/gifGrid';

const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    return (
        <>
            <h2>GiffExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map(category => <GifGrid key={category} category={ category }/>)
                }
            </ol>
        </>
    )
}

export default GiffExpertApp;