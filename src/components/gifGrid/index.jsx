import React from 'react';
import { useFetchGif } from '../../hooks/useFetchGifs';
import GifCard from '../gifCard';

const GifGrid = ( {category} ) => {

    const { data:images ,loading} = useFetchGif( category );

    return(
        <>
            <h3 className="animate__animated animate__fadeInLeftBig">{ category }</h3>
            { loading && <p>Loading...</p>} 
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