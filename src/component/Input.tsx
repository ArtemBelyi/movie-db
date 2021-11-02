import React from 'react';
import "antd/dist/antd.css"
import { Input } from 'antd';


const InputMovie: React.FC = () => {
    
    return (
        <div className="movie-app__movie-input movie-input">
            <Input placeholder="Basic usage" />
        </div>
    )
}
export default InputMovie