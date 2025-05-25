import React from 'react'

function Footer(props) {
const { handleToggleModel, data } = props
  return (
    <div className='footer'>
        <h2>APOD Project</h2>
         <h1>{data.title} <i onClick={handleToggleModel} className="fa-solid fa-circle-info"></i></h1>
           
    </div>
  )
}

export default Footer