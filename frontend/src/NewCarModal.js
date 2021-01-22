import React, { useState } from 'react'
import Modal from 'react-modal'

const NewCarModal = ({ onCancel }) => {
  const [description, setDescription] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [estimatedate, setEstimateDate] = useState('')
  const [km, setKm] = useState(0)
  const [id, setId] = useState(0)
  const [imageURL, setImageURL] = useState('')

  const saveCar = () => {
    fetch('https://prueba-carros.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: description,
        make: make,
        model: model,
        estimatedate: estimatedate,
        km: km,
        id: id,
        imageURL: imageURL,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log('error'))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    saveCar()
  }

  return (
    <Modal isOpen={true} onRequestClose={onCancel}>
      <h2>New Car</h2>
      <form className="car-form" onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="make">Car Brand</label>
        <input type="text" id="make" value={make} onChange={(e) => setMake(e.target.value)} />

        <label htmlFor="model">Model</label>
        <input type="text" id="model" value={model} onChange={(e) => setModel(e.target.value)} />

        <label htmlFor="estimatedate">Estimate Date</label>
        <input
          type="text"
          id="estimatedate"
          value={estimatedate}
          onChange={(e) => setEstimateDate(e.target.value)}
        />

        <label htmlFor="km">Km</label>
        <input type="text" id="km" value={km} onChange={(e) => setKm(e.target.value)} />

        <label htmlFor="id">Id</label>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />

        <label htmlFor="imageURL">Image Link</label>
        <input
          type="text"
          id="imageURL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit"> Save</button>
      </form>
    </Modal>
  )
}

export default NewCarModal
