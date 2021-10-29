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
            setDataMovies(data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="app">
                <MovieList items={dataMovies} />
        </div>
    )
}
export default App