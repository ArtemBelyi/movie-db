import React from 'react';
import { useState, useEffect, createContext } from 'react';
import "antd/dist/antd.css";
import { Skeleton, Alert, Tabs } from 'antd';
import { IMovie, IGenreList } from '../types/data';
import MovieList from './MovieList';
import InputMovie from './Input';
import MoviesService from '../services/services';
import PaginationMovie from './Pagination';


const GenresContext = createContext<IGenreList>({
    genres: []
})

const App: React.FC = () => {
    const [dataMovies, setDataMovies] = useState<IMovie[]>([])
    const [rateList, setRateList] = useState<IMovie[]>([])
    const [genrestList, setGenresList] = useState([])
    const [query, setQuery] = useState<string>('')
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true)
    const [alert, setAlert] = useState<boolean>(false)
    const listMovie = new MoviesService()
    const { TabPane } = Tabs
    
    useEffect(() => {
        listMovie.getRateList().then((res) => {
            listMovie.getResource(query, page).then((data) => {
                setDataMovies(syncRate(data.results, res.results))
                setTotalPages(data.total_pages)
                setLoading(false)
                setAlert(false)
            })
        }).catch(onError)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, page])
    useEffect(() => {
        listMovie.getRateList().then((data) => {
            setRateList(data.results)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        listMovie.getGenresList().then((data) => {
            setGenresList(data.genres)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
    const setRateMovie = (id: number, value: number) => {
        listMovie.postRateMovie(id, value).then(() => listMovie.getRateList().then((data) => {
            setRateList(data.results) 
        }))
    }
    const findElem = (elem: any) => {
        return function(movie: IMovie) {
            if (movie.id === elem.id) return elem
        }
    }
    function syncRate(arr: IMovie[], list: IMovie[]) {
        if (list.length === 0) return arr
        const result = arr.map(movie => {
            return list.find(findElem(movie)) || movie
        })
        return result
    }
    const hasData: boolean = !(loading || alert)
    const errorAlert: any = alert ? <Alert message="Error" description="Loading error" type="error" showIcon/> : null
    const skeleton: any = loading ? <Skeleton paragraph={{ rows: 16 }}/> : null
    const movieList: any = hasData ? <MovieList items={dataMovies} setRateMovie={setRateMovie}/> : null
    
    const context: IGenreList = { genres: genrestList }
    return (
        <div className="app">
            <div className="movie-app movie-app__container">
                <GenresContext.Provider value={context}>
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab="Search" key="1">
                        <InputMovie searchMovie={searchMovie}/>
                            {errorAlert}
                            {skeleton}
                            {movieList}
                            {!!totalPages && (<PaginationMovie totalPages={totalPages} page={page} changePage={changePage}/>)}
                        </TabPane>
                        <TabPane tab="Rated" key="2">
                            <MovieList items={rateList} setRateMovie={setRateMovie}/>
                        </TabPane>
                    </Tabs>
                </GenresContext.Provider>
            </div>
        </div>
    )
}
export default App
export { GenresContext }