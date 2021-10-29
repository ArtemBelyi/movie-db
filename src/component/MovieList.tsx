import React from 'react';
import IMovie from '../types/data';
import MovieCard from './MovieCard';

interface IMovieList {
    items: IMovie[]
}

const MovieList: React.FC<IMovieList> = (props) => {
    return (
        <div className="app__movie-list">
            {props.items.map(movie => <MovieCard key={movie.id} {...movie}/>)}
        </div>
    )
}
export default MovieList