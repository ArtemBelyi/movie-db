
import { IstateMovie, Iaction } from "../types/data";

export default function reducer(state: IstateMovie, action: Iaction) {
    switch (action.type) {
        case 'getMovies':
            return {
                ...state, 
                dataMovies: action.payload
            };
        case 'getTotalPage':
            return {
                ...state, 
                totalPages: action.payload
            }
        case 'getRateList':
            return {
                ...state, 
                rateList: action.payload
            }
        case 'getGenreList':
            return {
                ...state, 
                genrestList: action.payload
            }
        case 'setQuery':
            return {
                ...state, 
                query: action.payload
            }
        case 'setPage':
            return {
                ...state, 
                page: action.payload
            }
        case 'loading':
            return {
                ...state, 
                loading: action.payload
            }
        case 'alert':
            return {
                ...state, 
                alert: action.payload
            }
        default:
            return state;
    }
}