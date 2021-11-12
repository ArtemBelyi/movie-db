import React from 'react';
import { useEffect, createContext, useReducer } from 'react';
import "antd/dist/antd.css";
import { Skeleton, Alert, Tabs } from 'antd';
import { IMovie, IGenreList, movieState } from '../types/data';
import MovieList from './MovieList';
import InputMovie from './Input';
import MoviesService from '../services/services';
import PaginationMovie from './Pagination';
import reducer from '../context/reduce';


const GenresContext = createContext<IGenreList>({genres: []})

const App = () => {

    const [data, dispatch] = useReducer(reducer, movieState)
    const listMovie = new MoviesService()
    const { TabPane } = Tabs
    
    useEffect(() => {
        listMovie.getRateList().then((res) => {
            listMovie.getResource(data.query, data.page).then((data) => {
                dispatch({type: 'getMovies',  payload: syncRate(data.results, res.results)})
                dispatch({type: 'getTotalPage', payload:  data.total_pages})
                dispatch({type: 'loading', payload:  false})
                dispatch({type: 'alert', payload:  false})
                window.scrollTo(0, 0)
            }).catch(onError)
        }).catch(onError)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.query, data.page])
    useEffect(() => {
        listMovie.getRateList().then((data) => {
            dispatch({type: 'getRateList', payload: data.results})
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        listMovie.getGenresList().then((data) => {
            dispatch({type: 'genrestList', payload: data.genres})
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onError = ():void => {
        dispatch({type: 'loading', payload:  false})
        dispatch({type: 'alert', payload:  true})
    }
    const searchMovie = (str: string) => {
        dispatch({type: 'setQuery', payload: str})
    }
    const changePage = (page: number) => {
        dispatch({type: 'setPage', payload: page})
    }
    const setRateMovie = (id: number, value: number) => {
        listMovie.postRateMovie(id, value).then(() => listMovie.getRateList().then((data) => {
            dispatch({type: 'getRateList', payload: data.results}) 
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
    const hasData: boolean = !(data.loading || data.alert)
    const errorAlert: any = data.alert ? <Alert message="Error" description="Loading error" type="error" showIcon/> : null
    const skeleton: any = data.loading ? <Skeleton paragraph={{ rows: 16 }}/> : null
    const movieList: any = hasData ? <MovieList items={data.dataMovies} setRateMovie={setRateMovie}/> : null
    
    const context: IGenreList = { genres: data.genrestList }
    return (
        <div className="app">
            <div className="movie-app movie-app__container">
                <GenresContext.Provider value={context}>
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab="Search" key="1">
                        <InputMovie searchMovie={searchMovie} />
                            {errorAlert}
                            {skeleton}
                            {movieList}
                            {!!data.totalPages && (<PaginationMovie totalPages={data.totalPages} page={data.page} changePage={changePage}/>)}
                        </TabPane>
                        <TabPane tab="Rated" key="2">
                            <MovieList items={data.rateList} setRateMovie={setRateMovie}/>
                        </TabPane>
                    </Tabs>
                </GenresContext.Provider>
            </div>
        </div>
    )
}
export default App
export { GenresContext }