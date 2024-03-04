import React from 'react'
import DetailItem from './DetailItem'
import Residents from './Residents'

const PlanetDetails = ({planet}) => {
  return (
    <>
        <DetailItem label="diameter" value={planet.diameter} />
        <DetailItem label="climate" value={planet.climate} />
        <DetailItem label="terrain" value={planet.terrain} />
        <DetailItem label="gravity" value={planet.gravity} />
        <DetailItem label="population" value={planet.population} />
        <DetailItem label="orbital_period" value={planet.orbital_period} />
        <Residents residentsArray={planet.residents} />
    </>
    )
}

export default PlanetDetails