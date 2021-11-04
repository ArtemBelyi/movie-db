import { ImovieBd } from "../types/data"



export default class SwapiService {
    readonly searchMovie: string = `https://api.themoviedb.org/3/search/movie`
    readonly API_KEY: string = `api_key=addc3964774b2cc7dd5935c2545b30d8`

    getResource = async (url: string, page: number): Promise<ImovieBd> => {
        const defaultUrl = url || 'star'
        let response = await (await fetch(`${this.searchMovie}?${this.API_KEY}&page=${page}&query=${defaultUrl}`)).json()
        return response
    }
}