import React from 'react';
import { useState, useEffect } from 'react';
import "antd/dist/antd.css";
import { Skeleton, Alert } from 'antd';
import { IMovie } from '../types/data';
import MovieList from './MovieList';
import InputMovie from './Input';
import SwapiService from '../services/services';
import PaginationMovie from './Pagination';

const App: React.FC = () => {
    const [dataMovies, setDataMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useState<string>('')
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true)
    const [alert, setAlert] = useState<boolean>(false)
    const listMovie = new SwapiService()
    
    useEffect(() => {
        listMovie.getResource(query, page).then((data) => {
            setDataMovies(data.results)
            setTotalPages(data.total_pages)
            setLoading(false)
            setAlert(false)
        }).catch(onError)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, page])
    const onError = ():void => {
        setLoading(false)
        setAlert(true)
    }
    const searchMovie = (str: string) => {
        setQuery(str)
    }
    const changePage = (page: number) => {
        setPage(page)
    }
    const hasData: boolean = !(loading || alert)
    const errorAlert: any = alert ? <Alert message="Error" description="Loading error" type="error" showIcon/> : null
    const skeleton: any = loading ? <Skeleton paragraph={{ rows: 16 }}/> : null
    const movieList: any = hasData ? <MovieList items={dataMovies} /> : null
    return (
        <div className="app">
            <div className="movie-app movie-app__container">
                <InputMovie searchMovie={searchMovie}/>
                {errorAlert}
                {skeleton}
                {movieList}
                {!!totalPages && (<PaginationMovie totalPages={totalPages} page={page} changePage={changePage}/>)}
            </div>
        </div>
    )
}
export default App