import React, { useContext } from 'react';
import "antd/dist/antd.css"
import { Tag } from 'antd';
import { GenresContext } from './App';
import { IGenreList } from '../types/data'

interface ITagList {
    idList: number[]
}

const TagGenres = (props: ITagList) => {

    const { idList } = props
    const value: IGenreList = useContext(GenresContext)
    const arr = value.genres.filter(item => idList.includes(item.id))
    
    return (
        <>
            {arr.map((tag) => <Tag className="movie-card-desc-tag__item" color="blue" key={tag.id}>{tag.name}</Tag> )}
        </>
    )
}
export default TagGenres