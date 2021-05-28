import React from 'react';
import { useFetchGif } from '../../hooks/useFetchGifs';
import GifCard from '../gifCard';

const GifGrid = ( {category} ) => {

    const { data:images ,loading} = useFetchGif( category );

    return(
        <>
            { loading && <p>Loading...</p>} 
            <h3 className="animate__animated animate__fadeInDown">{ category }</h3>
            {/* El && funciona para evaluar solo una condicion */}
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