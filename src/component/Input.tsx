import React from 'react';
import "antd/dist/antd.css"
import { Input } from 'antd';
import _ from 'lodash'

interface Iinput {
    searchMovie: Function
}

const InputMovie = (props: Iinput) => {

    const changeValue = (event: any) => {
        props.searchMovie(event.target.value) 
    }
    
    return (
        <div className="movie-app__movie-input movie-input">
            <Input placeholder="Basic usage" onChange={_.debounce(changeValue, 800)}/>
        </div>
    )
}
export default InputMovie