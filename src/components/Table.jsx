import React from 'react'
import { Link } from 'react-router-dom'
import {extractPlanetId } from '../utils/extractPlanetId'

const Table = ({planets}) => {
  return (
    <table className="mt-12 divide-y divide-gray-200 w-full max-w-[1200px]">
        <thead className="">
            <tr>
                <th>Name</th>
                <th>Diameter</th>
                <th>Climate</th>
                <th>Terrain</th>
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-center ">
            {
                planets.results.map((planet, index) => (
                    <tr key={index} className='p-4'>
                        <td className='p-4 underline underline-offset-4'>
                            <Link to={`/planets/${extractPlanetId(planet.url)}`}>
                                {planet.name}
                            </Link>
                        </td>
                        <td>{planet.diameter}</td>
                        <td>{planet.climate}</td>
                        <td>{planet.terrain}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default Table