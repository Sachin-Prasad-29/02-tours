import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
    const [readmore, setReadmore] = useState(false);

    return (
        <article className='single-tour'>
            <img src={image} alt={name} />
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>Rs.{price}</h4>
                </div>
                <p>
                    {readmore ? info : `${info.substring(0, 150)}...`}
                    <span onClick={() => setReadmore(!readmore)}>{readmore ? ' Read less' : ' Read more'}</span>
                </p>
                <button className='delete-btn' onClick={() => removeTour(id)}>
                    not interested
                </button>
            </footer>
        </article>
    );
};

export default Tour;
