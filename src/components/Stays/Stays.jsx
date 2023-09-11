import React from 'react'
import "./Stays.css"

function Stays(prosp) {
  return (
    <div className="title">
        <h1 className='title1'>Stays in Finland</h1>
        <label className="numberTarj">{prosp.numberCard}</label>
    </div>
  )
}

export default Stays