import React from 'react'
import { useSearchParams } from "react-router-dom";

const Pagination = ({planets}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const isPrevious = Boolean(planets?.previous)
    const isNext = Boolean(planets?.next)
    const currentPage = searchParams.get('page') || 1

    const handlePreviousPage = () => {
        const prevPage = Number(currentPage) - 1
        setSearchParams({"page": prevPage})

    }

    const handleNextPage = () => {
        const nextPage = Number(currentPage) + 1
        setSearchParams({"page": nextPage})
    }

  
    return (
    <div className='flex gap-6 my-12'>
        <button onClick={handlePreviousPage} disabled={!isPrevious} className={`${!planets?.previous ? 'text-gray-500': ''}`}>Previous Page</button>
        <button onClick={handleNextPage} disabled={!isNext} className={`${!planets?.next ? 'text-gray-500': ''}`}>Next Page</button>
    </div>
  )
}

export default Pagination