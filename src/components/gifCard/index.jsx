import React from 'react';
import PropTypes from 'prop-types';

const GifCard = ({ url, title }) => {

    return (
        <div className="card animate__animated animate__fadeInDown">
            <img src={url} alt={ title } />
            <h4 className="gif-title"> { title } </h4>
        </div>
    )
}

GifCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifCard;