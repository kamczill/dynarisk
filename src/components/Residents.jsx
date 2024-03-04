import React from 'react'
import useFetchResidents from '../hooks/useFetchResidents'
import Spinner from './Spinner'
const Residents = ({residentsArray}) => {
    const { data, isLoading, error } = useFetchResidents(residentsArray)

    if(isLoading) return <div className=' px-14 mt-6'><Spinner /></div>
    if(error) return <div><p className='text-red-500'>Failed to load residents. Please try again later.</p></div>

  return (
    <div>
        <h3>Residents:</h3>
        <ul className='list-disc px-14'>
            {data?.map((resident, idx) => <li key={idx}>{resident.data.name}</li>)}
        </ul>
    </div>
  )
}

export default Residents