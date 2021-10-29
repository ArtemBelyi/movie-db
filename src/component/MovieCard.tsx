import React from 'react';
import IMovie from '../types/data';

const MovieCard: React.FC<IMovie> = (props) => {
    const { id, original_title, release_date, overview } = props
    return (
        <div className="app__movie-list-item">
            {original_title}
        </div>
    )
}
export default MovieCard