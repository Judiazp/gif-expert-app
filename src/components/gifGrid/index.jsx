import React from 'react';
import { useFetchGif } from '../../hooks/useFetchGifs';
import GifCard from '../gifCard';
import PropTypes from 'prop-types'

const GifGrid = ( {category} ) => {

    const { data:images ,loading} = useFetchGif( category );

    return(
        <>
            { loading && <p>Loading...</p>} 
            <div align="center">
                <h2 className="title-gifGrid animate__animated animate__fadeInDown">{ category }</h2>
            </div>
            <div className="grid animate__animated  animate__fadeInUp">
                {
                    images.map( gif => (
                        <GifCard key={gif.id} url={ gif.url } title={ gif.title } />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;