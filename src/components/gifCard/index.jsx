import React from 'react';

const GifCard = ({ gif }) => {
    return (
        <div className="card animate__animated animate__fadeInLeftBig">
            <img src={gif.url} alt="Gif spiderman" />
            <h4> { gif.title } </h4>
        </div>
    )
}

export default GifCard;