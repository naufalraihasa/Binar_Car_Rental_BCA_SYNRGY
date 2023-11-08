import express from 'express';
import { getCars, createCar } from '../handlers/carHandlers'; // Import the updateCar controller function
import upload from '../middlewares/upload';

const router = express.Router();

// Get all cars
router.get('/cars', getCars);

// Create a new car
router.post('/cars/create', upload.single('image'), createCar);

export default router;