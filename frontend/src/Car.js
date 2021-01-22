import React, { useState } from 'react'

const Car = ({ car }) => {
  const [lit, setLit] = useState(true)

  const toggle = () => {
    setLit(!lit)
  }

  return (
    <div className={`car ${lit ? '' : 'off'}`} onClick={toggle}>
      {car.imageURL ? (
        <img src={car.imageURL} alt="carPhoto" className="car-photo" />
      ) : (
        <div className="no-photo">?</div>
      )}
      {car.description ? <div className="car-description">{car.description}</div> : <span></span>}
      {car.make ? <div className="car-brand">{car.make}</div> : <span></span>}
      {car.model ? <div className="car-model"> Model: {car.model}</div> : <span></span>}
      {car.km ? <div className="car-km">Km: {car.km}</div> : <span></span>}
      {car.estimatedate ? (
        <div className="car-date">Estimate Date: {car.estimatedate}</div>
      ) : (
        <span></span>
      )}
      {car.id ? <div className="car-id">{car.id}</div> : <span></span>}
    </div>
  )
}

export default Car
