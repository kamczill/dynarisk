import React from 'react'
import Spinner from '../../components/Spinner'
import Table from '../../components/Table'
import Pagination from '../../components/Pagination'
import useFetchPlanets from '../../hooks/useFetchPlanets'

const HomePage = () => {
    const { planets, isLoading, error} = useFetchPlanets();

    if(isLoading) {
        return (
            <div className='h-full w-full flex justify-center items-center mt-12'>
                <Spinner />
            </div>
        )
    }
    if(error) return <div><p className='text-red-500 px-4'>Failed to load planets. Please try again later.</p></div>

  return (
    <div className='flex flex-col justify-center items-center'>

        {planets && (
            <>
                <Table planets={planets} /> 
                <Pagination planets={planets} />
            </>
        )}
       
    </div>
  )
}

export default HomePage