import React from 'react';
import { IMovie } from '../types/data';
import MovieCard from './MovieCard';

interface IMovieList {
    items: IMovie[]
    setRateMovie: Function
}

const MovieList = (props: IMovieList) => {
    return (
        <div className="movie-app__movie-list movie-list">
            {props.items.map(movie => <MovieCard key={movie.id} item={movie} setRateMovie={props.setRateMovie}/>)}
        </div>
    )
}
export default MovieList