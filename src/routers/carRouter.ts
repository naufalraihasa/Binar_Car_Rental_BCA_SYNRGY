import express from 'express';
import { getCars, createCar, updateCar, deleteCar } from '../controllers/carController'; // Import the updateCar controller function
import upload from '../middlewares/upload';

const router = express.Router();

// Get all cars
router.get('/cars', getCars);

// Create a new car
router.post('/cars', upload.single('image'), createCar);

// Update a car
router.put('/cars/:id', upload.single('image'), updateCar);

// Delete a car
router.delete('/cars/:id', deleteCar);

export default router;