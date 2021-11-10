import { ImovieBd } from "../types/data"



export default class MoviesService {
    readonly URL_API: string = `https://api.themoviedb.org/3`
    readonly searchMovie: string = `https://api.themoviedb.org/3/search/movie`
    readonly API_KEY: string = `api_key=addc3964774b2cc7dd5935c2545b30d8`
    readonly SESSION_ID: string = `907eb1a5788fdcd4b5082b84a82c806d` 

    getResource = async (url: string, page: number): Promise<ImovieBd> => {
        const defaultUrl = url || 'star'
        let response = await (await fetch(`${this.searchMovie}?${this.API_KEY}&page=${page}&query=${defaultUrl}`)).json()
        return response
    }
    getRateList = async (): Promise<ImovieBd> => {
        let response = await (await fetch(`${this.URL_API}/guest_session/${this.SESSION_ID}/rated/movies?${this.API_KEY}`)).json()
        return response
    }
    postRateMovie = async (id: number, num: number) => {
        const body = {value: num}
        const response = await fetch(`${this.URL_API}/movie/${id}/rating?${this.API_KEY}&guest_session_id=${this.SESSION_ID}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        return response
    }
    getGenresList = async () => {
        let response = await (await fetch(`${this.URL_API}/genre/movie/list?${this.API_KEY}`)).json()
        return response
    }
}