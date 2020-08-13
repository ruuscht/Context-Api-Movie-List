import React, { useState, createContext } from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$20',
            id: 1234
        },
        {
            name: 'Fast 5',
            price: '$12',
            id: 4321
        },
        {
            name: 'Ocean Eleven',
            price: '$15',
            id: 1337
        }
    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}