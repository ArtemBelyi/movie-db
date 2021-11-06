import React from 'react';
import "antd/dist/antd.css"
import { Rate } from 'antd';

const RateMovie: React.FC = (props) => {

    const onChange = (value: number) => {
        console.log(value)
    }
    
    return (
        <Rate style={{ fontSize: 16 }} allowHalf onChange={onChange} count={10} />
    )
}
export default RateMovie