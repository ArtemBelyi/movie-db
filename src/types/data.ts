interface IMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    rating?: number
}
interface ImovieBd {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}
interface IGenre {
    id: number,
    name: string
}
interface IGenreList {
    genres: IGenre[]
}
interface IstateMovie {
    dataMovies: IMovie[],
    rateList: IMovie[],
    genrestList: IGenre[],
    query: string,
    page: number,
    totalPages: number,
    loading: boolean,
    alert: boolean,

}
interface Iaction {
    type: string, 
    payload: any
}
const movieState: IstateMovie = {
    dataMovies: [],
    rateList: [],
    genrestList: [],
    query: '',
    page: 1,
    totalPages: 0,
    loading: true,
    alert: false
}
export type {IMovie, ImovieBd, IGenre, IGenreList, IstateMovie, Iaction }
export { movieState }