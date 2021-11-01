import React from 'react';
import IMovie from '../types/data';
import "antd/dist/antd.css"


const MovieCard: React.FC<IMovie> = (props) => {
    const { original_title, release_date, overview, poster_path } = props
    return (
        <div className="movie-list__item movie-card">
            <div className="movie-card__item movie-card-img"><img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${original_title} img`}/></div>
            <div className="movie-card__item movie-card-desc">
                <div className="movie-card-desc__item movie-card-desc-title">{original_title}</div>
                <div className="movie-card-desc__item movie-card-desc-date">{release_date}</div>
                <div className="movie-card-desc__item movie-card-desc-tag">Action Drama</div>
                <div className="movie-card-desc__item movie-card-desc-text">{overview}</div>
            </div>
        </div>
    )
}
export default MovieCard