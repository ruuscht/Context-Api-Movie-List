import React from 'react'

const Movie = ({ name, price }) => {
    
    return (
        <div>
           <h3 className="title">{name}</h3>
           <p className="price-tag">{price}</p>
        </div>
    )
}

export default Movie