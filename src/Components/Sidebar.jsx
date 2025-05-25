import React from 'react'

function Sidebar(props) {
    const { handleToggleModel, data } = props
    return (
        <div className="sidebar">
            <h1>{data?.title}</h1>
            <h2><b>{data?.date}</b></h2>
            <p>{data?.explanation}</p>
            <i onClick={handleToggleModel} className="fa-solid fa-arrow-right"></i>
        </div>
    )
}

export default Sidebar