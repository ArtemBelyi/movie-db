import React, { useState } from 'react';
import "antd/dist/antd.css"
import { Pagination } from 'antd';


const PaginationMovie: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)

    const onChange = (page: number) => {
        console.log(page)
        setCurrentPage(page)
    }
    
    return (
        <div className="movie-app__movie-pagination movie-pagination">
            <Pagination current={currentPage} onChange={onChange} total={40} />
        </div>
    )
}
export default PaginationMovie