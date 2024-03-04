import React from 'react'

const DetailItem = ({ label, value }) => {
  return (
    <p className='font-light'>{label}: <span className='font-bold'>{value}</span></p>
    )
}

export default DetailItem