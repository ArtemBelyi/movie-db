import IMovie from "../types/data"

export default class SwapiService {
    readonly searchMovie: string = `https://api.themoviedb.org/3/search/movie`
    readonly API_KEY: string = `api_key=addc3964774b2cc7dd5935c2545b30d8`

    getResource = async (url: string): Promise<IMovie[]> => {
        const URL = url || 'star'
        let response = await fetch(`${this.searchMovie}?${this.API_KEY}&query=${URL}`)
        let { results } = await response.json()
        if (!results) {
            const e = new Error('Неверный адрес');
            throw(e)
        }
        return results
    }
}