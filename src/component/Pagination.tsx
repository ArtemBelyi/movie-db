import React from 'react';
import "antd/dist/antd.css"
import { Pagination } from 'antd';

interface IPages {
    page: number,
    totalPages: number,
    changePage: Function
}

const PaginationMovie: React.FC<IPages> = (props) => {

    const onChange = (page: number) => {
        props.changePage(page)
    }
    
    return (
        <div className="movie-app__movie-pagination movie-pagination">
            <Pagination current={props.page} total={props.totalPages} defaultPageSize={20} showSizeChanger={false} onChange={onChange}/>
        </div>
    )
}
export default PaginationMovie