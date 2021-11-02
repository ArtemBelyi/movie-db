import React from 'react';
import { useState, useEffect } from 'react';
import "antd/dist/antd.css";
import { Skeleton, Alert } from 'antd';
import IMovie from '../types/data';
import MovieList from './MovieList';
import SwapiService from '../services/services';
import { on } from 'stream';

const App: React.FC = () => {
    const [dataMovies, setDataMovies] = useState<IMovie[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [alert, setAlert] = useState<boolean>(false)
    const listMovie = new SwapiService()
    
    useEffect(() => {
        listMovie.getResource('star').then((data) => {
            setDataMovies(data.slice(0, 6))
            setLoading(false)
            setAlert(false)
        }).catch(onError)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onError = ():void => {
        setLoading(false)
        setAlert(true)
    }
    const hasData = !(loading || alert)
    const errorAlert: any = alert ? <Alert message="Error" description="Loading error" type="error" showIcon/> : null
    const skeleton: any = loading ? <Skeleton paragraph={{ rows: 16 }}/> : null
    const movieList: any = hasData ? <MovieList items={dataMovies} /> : null
    return (
        <div className="app">
            <div className="movie-app movie-app__container">
                {errorAlert}
                {skeleton}
                {movieList}
            </div>
        </div>
    )
}
export default App