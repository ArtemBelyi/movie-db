import React from 'react';
import { useState, useEffect } from 'react';
import IMovie from '../types/data';
import MovieList from './MovieList';
import SwapiService from '../services/services';

const App: React.FC = () => {
    const [dataMovies, setDataMovies] = useState<IMovie[]>([])
    const listMovie = new SwapiService()
    
    useEffect(() => {
        listMovie.getResource('star').then((data) => {
            setDataMovies(data.slice(0, 6))
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="app">
            <div className="movie-app movie-app__container">
                <MovieList items={dataMovies} />
            </div>
        </div>
    )
}
export default App