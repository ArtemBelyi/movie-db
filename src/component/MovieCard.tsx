import React from 'react';
import { IMovie } from '../types/data';
import "antd/dist/antd.css"
import RateMovie from './Rate';


const MovieCard: React.FC<IMovie> = (props) => {
    const { original_title, release_date, overview, poster_path, vote_average } = props
    const border = {
        get color() {
            if (vote_average > 7) return {border: '2px solid #66E900'}
            if (vote_average > 5) return {border: '2px solid #E9D100'}
            if (vote_average > 3) return {border: '2px solid #E97E00'}
        }
    }
    //border: 2px solid #E9D100;
    return (
        <div className="movie-list__item movie-card">
            <div className="movie-card__item movie-card-img"><img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={`${original_title} img`}/></div>
            <div className="movie-card__item movie-card-desc">
                <div className="movie-card-desc__item movie-card-desc-vote" style={border.color} >{vote_average}</div>
                <div className="movie-card-desc__item movie-card-desc-title">{original_title}</div>
                <div className="movie-card-desc__item movie-card-desc-date">{release_date}</div>
                <div className="movie-card-desc__item movie-card-desc-tag">Action Drama</div>
                <div className="movie-card-desc__item movie-card-desc-text">{overview}</div>
                <div className="movie-card-desc__item movie-card-desc-rate"><RateMovie /></div>
            </div>
        </div>
    )
}
export default MovieCard