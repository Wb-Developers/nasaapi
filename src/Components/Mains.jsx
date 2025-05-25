import React from 'react'

function Mains(props) {
  const {data} = props
  return (
    <div className='imgContainer'>
      <img src={data?.hdurl} alt={data?.title || 'bg-img'}/>
      </div>
  )
}

export default Mains