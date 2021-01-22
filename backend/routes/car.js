const express = require('express')
const router = express.Router()
const Car = require('../models/Car')

//GET ALL CARS
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find()
    res.json(cars)
  } catch (err) {
    res.json({ message: err })
  }
})

//SUBMIT A CAR
router.post('/', async (req, res) => {
  const car = new Car({ ...req.body })
  try {
    const newCar = await car.save()
    res.json(newCar)
  } catch (err) {
    res.json({ message: err })
  }
})

//GET A SPECIFIC CAR
router.get('/:carId', async (req, res) => {
  try {
    const car = await Car.findById(req.params.carId)
    res.json(car)
  } catch (err) {
    res.json({ message: err })
  }
})

//DELETE CAR
router.delete('/carId', async (req, res) => {
  try {
    const removedCar = await Car.remove({ _id: req.params.carId })
    res.json(removedCar)
  } catch (err) {
    res.json({ message: err })
  }
})

//UPDATE A CAR
router.patch('/:carId', async (req, res) => {
  try {
    const updatedCar = await Car.updateOne({ _id: req.params.carId }, { $set: { ...req.body } })
    res.json(updatedCar)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
