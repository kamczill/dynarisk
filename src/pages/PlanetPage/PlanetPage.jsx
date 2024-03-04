import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetchPlanet from '../../hooks/useFetchPlanet'
import Spinner from '../../components/Spinner'
import PlanetDetails from '../../components/PlanetDetails'

const PlanetPage = () => {
  const { id } = useParams()
  const { planet, isLoading, error } = useFetchPlanet(id);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  if(isLoading) return <div className='mt-12 w-full flex justify-center'><Spinner /></div>
  if(error) return <div><p className='text-red-500 px-4'>Failed to load planet details. Please try again later.</p></div>

  return (
    <div className='p-6 mt-6 max-w-[1200px] w-full mx-auto'>
      <div className='flex justify-between'>
      <h2 className='text-4xl'>{planet?.name}</h2>
      <button onClick={handleBack} className='underline underline-offset-4'>Back to list</button>
      </div>
      <div className='flex flex-col gap-2 mt-4'>
      {planet && <PlanetDetails planet={planet} /> }
      </div>
    </div>
  )
}

export default PlanetPage