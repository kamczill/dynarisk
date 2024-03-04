import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to='/' reloadDocument>
        <h1 className='font-bold text-4xl text-black p-4 text-center star-wars'>The Star Wars Planets</h1>
      </Link>
    </nav>
  )
}

export default Header