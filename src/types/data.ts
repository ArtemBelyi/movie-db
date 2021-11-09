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
export type {IMovie, ImovieBd, IGenre, IGenreList}