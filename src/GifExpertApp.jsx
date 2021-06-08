import React, { useState } from 'react';
import AddCategory from './components/addCategory';
import GifGrid from './components/gifGrid';

const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    return (
        <div id="addCategory" className="contenedor">
            <nav>
                <a class="logotipo" href="#">GiffExpertApp</a>
                <div>
                    <AddCategory setCategories={ setCategories }/>
                </div>
            </nav>
            {
                categories.map(category => <GifGrid key={category} category={ category }/>)
            }
        </div>
    )
}

export default GiffExpertApp;