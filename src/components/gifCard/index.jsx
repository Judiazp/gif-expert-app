import React from 'react';

const GifCard = ({ gif }) => {
    return (
        <div className="card animate__animated animate__fadeInDown">
            <img src={gif.url} alt="Gif" />
            <h4 className="gif-title"> { gif.title } </h4>
        </div>
    )
}

export default GifCard;