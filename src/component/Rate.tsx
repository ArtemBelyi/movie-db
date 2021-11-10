import React, { useState } from 'react';
import "antd/dist/antd.css"
import { Rate } from 'antd';

interface IRate {
    count: number,
    id: number,
    setRateMovie: Function
}

const RateMovie: React.FC<IRate> = (props) => {
    const [rate, setRate] = useState(Boolean(false || props.count))

    const onChange = (value: number) => {
        props.setRateMovie(props.id, value)
        setRate(true)
    }
    return (
        <Rate style={{ fontSize: 16 }} allowHalf onChange={onChange} count={10} defaultValue={props.count} disabled={rate} />
    )
}
export default RateMovie