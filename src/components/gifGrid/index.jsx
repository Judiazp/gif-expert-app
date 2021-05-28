import React, { useEffect, useState } from 'react';
import GifCard from '../gifCard';
import { getGifs } from '../helpers/getGifs';

const GifGrid = ( {category} ) => {

    const [images, setImages] = useState([]);
    
    useEffect( () => {
        getGifs( category ).then( setImages )
    }, [ category ])

   

    return(
        <>
            <h3>{ category }</h3>
            <div className="grid-content">
                {
                    images.map( gif => (
                        <GifCard key={gif.id} gif={ gif } />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;