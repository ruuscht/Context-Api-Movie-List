import React, { useState, useContext } from 'react'
import './App.css'
import {MovieContext} from './MovieContext'



const AddMovie = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [movie, setMovies] = useContext(MovieContext)

    const updateTitle = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const AddMovie = e => {
        e.preventDefault()
        setMovies(prevMovies => [...prevMovies, {name: name, price: '$ ' + price}])
    }
    
    return (
        <form onSubmit={AddMovie}>
            <h1>Add your movie</h1>
            <input placeholder="Movie Title" type="text" name="title" value={name} onChange={updateTitle} />
            <br />
            <input placeholder="Movie Price" type="text" name="price" value={price} onChange={updatePrice} />
            <br />
            <button>Submit</button>
        </form>
        
    )
}

export default AddMovie