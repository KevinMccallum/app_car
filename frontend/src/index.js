import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import NewCarModal from './NewCarModal'
import './index.css'
import Car from './Car'

const App = () => {
  const [cars, setCars] = useState([])
  const [addCar, setAddCar] = useState(false)

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://prueba-carros.herokuapp.com/')
      const cars = await res.json()
      setCars(cars)
    }
    getData()
  }, [])

  return (
    <main>
      <h1>Car Maintenance</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <Car car={car} />
          </li>
        ))}
      </ul>
      <button onClick={() => setAddCar(true)}>Add a Car</button>
      {addCar && <NewCarModal isOpen={addCar} onCancel={() => setAddCar(false)} />}
    </main>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
