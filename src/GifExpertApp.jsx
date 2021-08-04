import React, { useEffect, useState } from 'react';
import AddCategory from './components/addCategory';
import GifGrid from './components/gifGrid';

const GiffExpertApp = ({ defaultCategories=['']}) => {

    const initialStateDarkMode =  JSON.parse(localStorage.getItem('darkMode')) || false
    const [darkMode, setDarkMode] = useState(initialStateDarkMode)

    const [categories, setCategories] = useState(defaultCategories);
    
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode])

    if (darkMode) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark') 
    }

    const handleClick = () => {
        setDarkMode(!darkMode)
        document.body.classList.toggle('dark')
    }

    return (
        <div id="addCategory" className="contenedor">
            <nav>
                <a class="logotipo" href="/">GiffExpertApp</a>
                <div>
                    <AddCategory setCategories={ setCategories }/>
                </div>
                <button className={ darkMode? "switch active" : "switch" } onClick={ () => handleClick()}> 
                    <span> <i class="fas fa-sun"></i> </span>
                    <span> <i class="fas fa-moon"></i> </span>
                </button>
            </nav>
            {
                categories.map(category => <GifGrid key={category} category={ category }/>)
            }
        </div>
    )
}

export default GiffExpertApp;